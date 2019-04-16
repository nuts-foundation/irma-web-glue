import StateMachine from './state-machine';
import RenderEngine from './render-engine';

import irma from '@privacybydesign/irmajs';

export default class IrmaWebGlue {

  constructor(element, options) {
    this._renderEngine = new RenderEngine(element, this._sanitizeOptions(options));
    this._stateMachine = new StateMachine((s) => this._stateChangeHandler(s));
  }

  _stateChangeHandler(state) {
    this._renderEngine.render(state);

    // Catch fail states
    if (['Cancelled', 'TimedOut', 'Error', 'BrowserNotSupported'].includes(state) && this._reject) {
      this._reject();
    }

    // Catch success state
    if (state == 'Success' && this._resolve) {
      setTimeout(() => this._resolve(), 1000);
    }
  }

  startSession(server, request) {
    this._stateMachine.transition('initialize');

    return new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject  = reject;

      irma.startSession(server, request)
          .then(({ sessionPtr, token }) => this._handleSession(server, sessionPtr, token))
          .catch(() => stateMachine.transition('fail'));
    });
  }

  _handleSession(server, sessionPtr, token) {
    this._stateMachine.transition('showQRCode');

    // Tell Irma how to behave
    const irmaOptions = {
      server: server,
      token: token,
      method: 'canvas',
      element: 'irma-web-qr-canvas',
      disableMobile: true,
      showConnectedIcon: false
    };

    irma.handleSession(sessionPtr, irmaOptions)
        .then(({d}) => this._handleDone(d))
        .catch(() => this._stateMachine.transition('fail'));
  }

  _handleDone(result) {
    console.log('Done', result);
    this._stateMachine.transition('succeed');
  }

  _sanitizeOptions(options) {
    const defaults = {
      showHelper: false,
      translations: {
        header:    'Inloggen met <i class="irma-web-logo">IRMA</i>',
        helper:    'Kom je er niet uit? Kijk dan eerst eens op <a href="https://privacybydesign.foundation/irma-begin/">de website van IRMA</a>.',
        loading:   'Eén moment alsjeblieft',
        button:    'Open IRMA app',
        qrCode:    'Toon QR code',
        phone:     'Volg de instructies op je telefoon',
        retry:     'Opnieuw proberen',
        cancelled: 'Transactie is geannuleerd',
        timeout:   'Transactie is verlopen',
        error:     'Er is een fout opgetreden',
        browser:   'Het spijt ons, maar je browser voldoet niet aan de minimale eisen',
        success:   'Gelukt!'
      }
    };

    return Object.assign({}, defaults, options);
  }

}
