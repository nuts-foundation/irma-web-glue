/**
 * This file defines the states for the state machine, plus the different valid
 * transitions to other states from each state.
 *
 * The transition 'fail' is a special one, and will (also) be triggered if we
 * try to apply an invalid transition from that state.
 */

export default {

  Uninitialized: {
    initialize:     'Loading',
    browserError:   'BrowserNotSupported',
    fail:           'Error'
  },

  Loading: {
    showQRCode:     'ShowingQRCode',
    showIrmaButton: 'ShowingIrmaButton',
    fail:           'Error'
  },

  ShowingQRCode: {
    codeScanned:    'ContinueOn2ndDevice',
    timeout:        'TimedOut',
    fail:           'Error'
  },

  ContinueOn2ndDevice: {
    succeed:        'Success',
    cancel:         'Cancelled',
    restart:        'Loading',
    timeout:        'TimedOut',
    fail:           'Error'
  },

  ShowingIrmaButton: {
    chooseQR:       'ShowingQRCodeInstead',
    openIrmaApp:    'ContinueInIrmaApp',
    fail:           'Error'
  },

  ShowingQRCodeInstead: {
    codeScanned:    'ContinueOn2ndDevice',
    restart:        'Loading',
    timeout:        'TimedOut',
    fail:           'Error'
  },

  ContinueInIrmaApp: {
    succeed:        'Success',
    cancel:         'Cancelled',
    restart:        'Loading',
    timeout:        'TimedOut',
    fail:           'Error'
  },

  Cancelled: {
    restart:        'Loading'
  },

  TimedOut: {
    restart:        'Loading'
  },

  Error: {
    restart:        'Loading'
  },

  BrowserNotSupported: {},
  Success: {}

}
