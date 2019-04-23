import irma from '@privacybydesign/irmajs';

export default class IrmaJSBackend {

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
      case 'ContinueInApp':
        this._openIrmaApp();
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
    irma.startSession(this._options.server, this._options.request)
        .then(({ sessionPtr, token }) => this._handleSession(sessionPtr, token))
        .catch((m) => {
          console.error("Irma startSession failed:", m);
          stateMachine.transition('fail')
        });
  }

  _handleSession(sessionPtr, token) {
    Object.assign(this._options, {
      sessionPtr: sessionPtr,
      token:      token
    });

    // Mobile or desktop version?
    if (irma.detectUserAgent() == irma.UserAgent.Desktop) {
      this._stateMachine.transition('showQRCode');
    } else {
      this._stateMachine.transition('showIrmaButton');
    }
  }

  _renderQRCode() {
    this._runIrmaFlow({
      method:            'canvas',
      element:           'irma-web-qr-canvas',
      showConnectedIcon: false,
      disableMobile:     true
    });
  }

  _openIrmaApp() {
    this._runIrmaFlow({
      method: 'mobile'
    });
  }

  _runIrmaFlow(options) {
    let irmaState = {};
    irma.setupSession(this._options.sessionPtr, irmaState, Object.assign(this._options, options))
        .then((p) => {
          if (options.method == 'canvas') this._stateMachine.transition('codeScanned');
          irma.finishSession(p, irmaState)
              .then( (r) => this._handleDone(r))
              .catch((s) => this._handleError(s));
        })
        .catch((m) => {
          console.error("Irma setupSession failed:", m);
          stateMachine.transition('fail')
        })
  }

  _handleDone(result) {
    this._resultCallback(result);
    this._stateMachine.transition('succeed');
  }

  _handleError(state) {
    switch(state) {
      case 'CANCELLED':
        // This is a conscious choice by a user
        this._stateMachine.transition('cancel');
        break;
      default:
        console.error("Irma finishSession failed:", state);
        this._stateMachine.transition('fail');
        break;
    }
  }

}
