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
    timeout:        'TimedOut',
    fail:           'Error'
  },

  ContinueOnPhone: {
    succeed:        'Success',
    cancel:         'Cancelled',
    restart:        'Loading',
    timeout:        'TimedOut',
    fail:           'Error'
  },

  ShowingIrmaButton: {
    chooseQR:       'ShowingQRCodeInstead',
    openIrmaApp:    'ContinueInApp',
    fail:           'Error'
  },

  ShowingQRCodeInstead: {
    codeScanned:    'ContinueOnPhone',
    restart:        'Loading',
    timeout:        'TimedOut',
    fail:           'Error'
  },

  ContinueInApp: {
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
