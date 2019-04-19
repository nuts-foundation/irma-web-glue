import irma from '@privacybydesign/irmajs';

export default class IrmaJSBackend {

  constructor(stateMachine, options, resultCallback) {
    this._stateMachine = stateMachine;
    this._options = options;
    this._resultCallback = resultCallback;
  }

  startFlow(server, request) {
    this._stateMachine.transition('initialize');

    irma.startSession(server, request)
        .then(({ sessionPtr, token }) => this._handleSession(server, sessionPtr, token))
        .catch((m) => {
          console.error("Irma startSession failed:", m);
          stateMachine.transition('fail')
        });
  }

  _handleSession(server, sessionPtr, token) {
    // Mobile or desktop version?
    let userAgent = irma.detectUserAgent();
    if ( userAgent == irma.UserAgent.Android || userAgent == irma.UserAgent.iOS ) {
      console.log("📱 on a mobile device");
      this._stateMachine.transition('showIrmaButton');
      return;
    }

    /* We're on a desktop from here on */
    console.log("🖥 on a desktop");
    this._stateMachine.transition('showQRCode'); // Give IRMA a place to render to

    // Tell Irma how to behave
    const irmaOptions = Object.assign({}, this._options, {
      server: server,
      token: token,
      stateCallback: (s) => this._handleStateChange(s)
    });

    let irmaState = {};
    irma.setupSession(sessionPtr, irmaState, irmaOptions)
        .then((p) => {
          this._stateMachine.transition('codeScanned');
          irma.finishSession(p, irmaState)
              .then( (d) => this._handleDone(d))
              .catch((s) => this._handleStateChange(s));
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

  _handleStateChange(state) {
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
