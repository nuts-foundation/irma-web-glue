import QRCode from 'qrcode';

// Polyfill `fetch` for IE11
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class NutsAuthBackend {

  constructor(stateMachine, resultCallback, options) {
    this._stateMachine   = stateMachine;
    this._resultCallback = resultCallback;
    this._options        = options;

    this._stateMachine.addStateChangeListener((s) => this._stateChangeListener(s));
  }

  _stateChangeListener(state) {
    switch(state) {
      case 'Loading':
        this._startNewSession();
        break;
      case 'ShowingQRCode':
      case 'ShowingQRCodeInstead':
        this._renderQRCode();
        break;
      case 'ContinueOn2ndDevice':
        this._waitForSigning();
        break;
    }
  }

  startFlow(server, request) {
    Object.assign(this._options, {
      server: server,
      request: request
    });

    this._stateMachine.transition('initialize');
  }

  _startNewSession() {
    fetch(`${this._options.server}/auth/contract/session`, {
      method: 'POST',
      mode: 'cors',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(this._options.request),
      cache: 'reload'
    })
    .then(result => {
      if (result.status != 201)
        throw('Error in starting session: Session endpoint returned status other than 201 created');
      return result.json();
    })
    .then(session => {
      this._options.session = session;
      this._stateMachine.transition('showQRCode');
    })
    .catch(() => {
      this._stateMachine.transition('fail');
    })
  }

  _renderQRCode() {
    const canvasEl = document.getElementById('irma-web-qr-canvas');
    const qrCodeString = JSON.stringify(this._options.session.qr_code_info);
    QRCode.toCanvas(canvasEl, qrCodeString, {width: 350});

    this._waitForScanning();
  }

  _waitForScanning() {
    this._waitFor('CONNECTED')
    .then(state => {
      this._stateMachine.transition('codeScanned');
    })
    .catch((error) => this._handleUnexpectedStates(error));
  }

  _waitForSigning() {
    this._waitFor('DONE')
    .then(state => {
      if ( state.proofStatus != "VALID" ) {
        this._stateMachine.transition('fail');
      }

      this._resultCallback(state);
      this._stateMachine.transition('succeed');
    })
    .catch((error) => this._handleUnexpectedStates(error));
  }

  _waitFor(targetState) {
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        fetch(`${this._options.server}/auth/contract/session/${this._options.session.session_id}`, {
          method: 'GET',
          mode: 'cors',
          headers: {"Content-Type": "application/json"},
          cache: 'reload'
        })
        .then(result => {
          if ( result.status != 200 )
            throw('Error in polling: Session endpoint returned status other than 200 OK');
          return result.json();
        })
        .then(state => {
          if ( state.status == targetState ) {
            clearInterval(interval);
            resolve(state);
          }
          if ( ['TIMEOUT', 'ERROR', 'CANCELLED'].includes(state.status) ) {
            clearInterval(interval);
            reject(state);
          }
        }).catch((err) => {
          clearInterval(interval);
          reject(err);
        });
      }, 1000);
    });
  }

  _handleUnexpectedStates(error) {
    switch(error.status) {
      case 'TIMEOUT':
        this._stateMachine.transition('timeout');
        return;
      case 'ERROR':
        this._stateMachine.transition('fail');
        return;
      case 'CANCELLED':
        this._stateMachine.transition('cancel');
        return;
    }

    console.error(error);
  }

}
