import StateMachine from './state-machine';
import IrmaWebFrontend from './frontends/irma-web';
import IrmaJSBackend from './backends/irmajs';

export default class IrmaWebGlue {

  constructor(element, options) {
    options = this._sanitizeOptions(options);

    this._frontend     = new options.frontend(element, options.frontEndOptions);
    this._stateMachine = new StateMachine((s) => this._stateChangeHandler(s));
    this._backend      = new options.backend(this._stateMachine, options.backendOptions, (r) => this._flowResult = r);
  }

  startFlow(server, request) {
    return new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject  = reject;

      this._backend.startFlow(server, request);
    });
  }

  _stateChangeHandler(state) {
    this._frontend.render(state);

    // Catch fail states
    // Note: If the user can recover from a state, it's not really a fail state
    if (state == 'BrowserNotSupported' && this._reject) {
      this._reject(state);
    }

    // Catch success state
    if (state == 'Success' && this._resolve) {
      // Give a delay for the user to actually see the success state
      setTimeout(() => this._resolve(this._flowResult), 500);
    }
  }

  _sanitizeOptions(options) {
    return Object.assign({
      frontend:   IrmaWebFrontend,
      backend:    IrmaJSBackend,
      frontEndOptions: {
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
      },
      backendOptions: {
        method: 'canvas',
        element: 'irma-web-qr-canvas',
        showConnectedIcon: false,
        disableMobile: true
      }
    }, options);
  }

}
