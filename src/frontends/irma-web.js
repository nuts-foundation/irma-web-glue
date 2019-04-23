export default class IrmaWebFrontend {

  constructor(stateMachine, element, options) {
    this._stateMachine = stateMachine;
    this._element      = element;
    this._options      = this._sanitizeOptions(options);

    this._renderInitialState();
    this._attachClickHandler();

    this._stateMachine.addStateChangeListener((s) => this._render(s));
  }

  _sanitizeOptions(options) {
    return Object.assign({
      showHelper: false,
      translations: {
        header:    'Inloggen met <i class="irma-web-logo">IRMA</i>',
        helper:    'Kom je er niet uit? Kijk dan eerst eens op <a href="https://privacybydesign.foundation/irma-begin/">de website van IRMA</a>.',
        loading:   'Eén moment alsjeblieft',
        button:    'Open IRMA app',
        qrCode:    'Toon QR code',
        phone:     'Volg de instructies op je telefoon',
        app:       'Volg de instructies in de IRMA app',
        retry:     'Opnieuw proberen',
        back:      'Ga terug',
        cancelled: 'Je hebt het proces geannuleerd',
        timeout:   'We hebben te lang niks van je gehoord',
        error:     'Er is een fout opgetreden',
        browser:   'Het spijt ons, maar je browser voldoet niet aan de minimale eisen',
        success:   'Gelukt!'
      }
    }, options);
  }

  _renderInitialState() {
    this._element.classList.add('irma-web-form');
    this._element.innerHTML = this._irmaWebForm(this._stateUninitialized());
  }

  _attachClickHandler() {
    // Polyfill for Element.matches to fix IE11
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector ||
                                  Element.prototype.webkitMatchesSelector;
    }

    this._element.addEventListener('click', (e) => {
      if (e.target.matches('[data-irma-glue-transition]')) {
        this._stateMachine.transition(e.target.getAttribute('data-irma-glue-transition'));
      }
    });
  }

  _render(state) {
    let newPartial = this._stateToPartialMapping()[state];
    if (!newPartial) throw new Error(`I don't know how to render '${state}'`);

    if (state == 'ContinueInApp') {
      // Add a tiny delay so we don't see the flicker when switching to the app
      window.setTimeout(() => this._renderPartial(newPartial), 200);
    } else {
      this._renderPartial(newPartial);
    }
  }

  _renderPartial(newPartial) {
    this._element
        .querySelector('.content .centered')
        .innerHTML = newPartial.call(this);
  }

  _stateToPartialMapping() {
    return {
      Uninitialized:        this._stateUninitialized,
      Loading:              this._stateLoading,
      ShowingQRCode:        this._stateShowingQRCode,
      ContinueOnPhone:      this._stateContinueOnPhone,
      ShowingIrmaButton:    this._stateShowingIrmaButton,
      ShowingQRCodeInstead: this._stateShowingQRCodeInstead,
      ContinueInApp:        this._stateContinueInApp,
      Cancelled:            this._stateCancelled,
      TimedOut:             this._stateTimedOut,
      Error:                this._stateError,
      BrowserNotSupported:  this._stateBrowserNotSupported,
      Success:              this._stateSuccess
    };
  }

  /** Container markup **/

  _irmaWebForm(content) {
    return `
      <header class="header ${this._options.showHelper ? 'show-helper' : ''}">
        <p>${this._options.translations.header}</p>
        <section class="helper">
          <p>${this._options.translations.helper}</p>
        </section>
      </header>
      <section class="content">
        <section class="centered">
          ${content}
        </section>
      </section>
    `;
  }

  /** States markup **/

  _stateUninitialized() {
    return `
      <!-- State: Uninitialized -->
      <div class="irma-web-loading-animation">
        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      <p>${this._options.translations.loading}</p>
    `;
  }

  _stateLoading() {
    return `
      <!-- State: Loading -->
      <div class="irma-web-loading-animation">
        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      <p>${this._options.translations.loading}</p>
    `;
  }

  _stateShowingQRCode() {
    return `
      <!-- State: ShowingQRCode -->
      <canvas id="irma-web-qr-canvas"></canvas>
    `;
  }

  _stateContinueOnPhone() {
    return `
      <!-- State: WaitingForUser -->
      <div class="irma-web-waiting-for-user-animation"></div>
      <p>${this._options.translations.phone}</p>
      <p><a data-irma-glue-transition="restart">${this._options.translations.retry}</a></p>
    `;
  }

  _stateShowingIrmaButton() {
    return `
      <!-- State: ShowingButton -->
      <button class="irma-web-button" data-irma-glue-transition="openIrmaApp">${this._options.translations.button}</button>
      <p><a data-irma-glue-transition="chooseQR">${this._options.translations.qrCode}</a></p>
    `;
  }

  _stateShowingQRCodeInstead() {
    return `
      <!-- State: ShowingQRCode -->
      <canvas id="irma-web-qr-canvas"></canvas>
      <p><a data-irma-glue-transition="restart">${this._options.translations.back}</a></p>
    `;
  }

  _stateContinueInApp() {
    return `
      <!-- State: WaitingForUser -->
      <div class="irma-web-waiting-for-user-animation"></div>
      <p>${this._options.translations.app}</p>
      <p><a data-irma-glue-transition="restart">${this._options.translations.retry}</a></p>
    `;
  }

  _stateCancelled() {
    return `
      <!-- State: Cancelled -->
      <p>${this._options.translations.cancelled}</p>
      <p><a data-irma-glue-transition="restart">${this._options.translations.retry}</a></p>
    `;
  }

  _stateTimedOut() {
    return `
      <!-- State: TimedOut -->
      <p>${this._options.translations.timeout}</p>
      <p><a data-irma-glue-transition="restart">${this._options.translations.retry}</a></p>
    `;
  }

  _stateError() {
    return `
      <!-- State: Error -->
      <p>${this._options.translations.error}</p>
      <p><a data-irma-glue-transition="restart">${this._options.translations.retry}</a></p>
    `;
  }

  _stateBrowserNotSupported() {
    return `
      <!-- State: Error -->
      <p>${this._options.translations.browser}</p>
    `;
  }

  _stateSuccess() {
    return `
      <!-- State: Success -->
      <div class="irma-web-checkmark-animation"></div>
      <p>${this._options.translations.success}</p>
    `;
  }

}
