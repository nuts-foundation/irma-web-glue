import StateMachine   from './state-machine';
import * as frontends from './frontends';
import * as backends  from './backends';

export default class IrmaWebGlue {

  constructor(element, options) {
    options = this._sanitizeOptions(options);

    this._stateMachine = new StateMachine();
    this._stateMachine.addStateChangeListener((s) => this._stateChangeListener(s));

    this._frontend     = new options.frontend(this._stateMachine, element, options.frontEndOptions);
    this._backend      = new options.backend(this._stateMachine, (r) => this._flowResult = r, options.backendOptions);
  }

  _sanitizeOptions(options) {
    return Object.assign({
      frontend: frontends.IrmaWeb,
      backend:  backends.IrmaJS,
      frontEndOptions: {},
      backendOptions:  {}
    }, options);
  }

  startFlow(server, request) {
    return new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject  = reject;

      this._backend.startFlow(server, request);
    });
  }

  _stateChangeListener(state) {
    // Note: If the user can recover from a state, it's not really a fail state
    if (state == 'BrowserNotSupported' && this._reject) {
      this._reject(state);
    }

    if (state == 'Success' && this._resolve) {
      // Give a delay for the user to actually see the success state
      setTimeout(() => this._resolve(this._flowResult), 500);
    }
  }

}
