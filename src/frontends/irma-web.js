export default class IrmaWebFrontend {

  constructor(element, options) {
    this._element = element;
    this._options = options;

    this._element.classList.add('irma-web-form');
    this._element.innerHTML = this._irmaWebForm(this._stateUninitialized());
  }

  render(state) {
    let newPartial = this._stateToPartialMapping()[state];
    if (!newPartial) throw new Error(`I don't know how to render '${state}'`);

    this._element
        .querySelector('.content .centered')
        .innerHTML = newPartial.call(this);
  }

  _stateToPartialMapping() {
    return {
      Uninitialized:       this._stateUninitialized,
      Loading:             this._stateLoading,
      ShowingQRCode:       this._stateShowingQRCode,
      ShowingIrmaButton:   this._stateShowingIrmaButton,
      ContinueOnPhone:     this._stateContinueOnPhone,
      Cancelled:           this._stateCancelled,
      TimedOut:            this._stateTimedOut,
      Error:               this._stateError,
      BrowserNotSupported: this._stateBrowserNotSupported,
      Success:             this._stateSuccess
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

  _stateShowingIrmaButton() {
    return `
      <!-- State: ShowingButton -->
      <button class="irma-web-button">${this._options.translations.button}</button>
      <p><a href="#">${this._options.translations.qrCode}</a></p>
    `;
  }

  _stateContinueOnPhone() {
    return `
      <!-- State: WaitingForUser -->
      <div class="irma-web-waiting-for-user-animation"></div>
      <p>${this._options.translations.phone}</p>
    `;
  }

  _stateCancelled() {
    return `
      <!-- State: Cancelled -->
      <p>${this._options.translations.cancelled}</p>
      <p><a href="#">${this._options.translations.retry}</a></p>
    `;
  }

  _stateTimedOut() {
    return `
      <!-- State: TimedOut -->
      <p>${this._options.translations.timeout}</p>
      <p><a href="#">${this._options.translations.retry}</a></p>
    `;
  }

  _stateError() {
    return `
      <!-- State: Error -->
      <p>${this._options.translations.error}</p>
      <p><a href="#">${this._options.translations.retry}</a></p>
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
