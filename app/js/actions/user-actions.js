'use strict';
var Dispatcher = require('../dispatcher/dispatcher');

module.exports = {
  signIn: function(data) {
    Dispatcher.handleAction({
      actionType: 'USER_SIGN_IN',
      data: data
    });
  },

  signOut: function() {
    Dispatcher.handleAction({
      actionType: 'USER_SIGN_OUT'
    });
  },

  isValid: function(data) {
    Dispatcher.handleAction({
      actionType: 'USER_CHECK_VALID',
      data: data
    });
  },

  navigate: function(data) {
    Dispatcher.handleAction({
      actionType: 'USER_NAVIGATE',
      data: data
    });
  }
};
