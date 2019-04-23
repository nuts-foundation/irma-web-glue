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
    codeScanned:    'ContinueOnPhone',
    fail:           'Error'
  },

  ContinueOnPhone: {
    succeed:        'Success',
    cancel:         'Cancelled',
    restart:        'Loading',
    fail:           'Error'
  },

  ShowingIrmaButton: {
    chooseQR:       'ShowingQRCodeInstead',
    openIrmaApp:    'ContinueInApp',
    fail:           'Error'
  },

  ShowingQRCodeInstead: {
    codeScanned:    'ContinueOnPhone',
    fail:           'Error',
    restart:        'Loading'
  },

  ContinueInApp: {
    succeed:        'Success',
    cancel:         'Cancelled',
    restart:        'Loading',
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
