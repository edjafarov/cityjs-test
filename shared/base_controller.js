
define(function(require, exports, module) {
  var Controller, appState;
  appState = require('shared/app_state');
  return Controller = (function() {

    Controller.prototype.currentView = null;

    function Controller() {}

    Controller.prototype.onBeforeRequest = function() {
      var prevController;
      prevController = appState.get('prevController');
      if (this.currentView != null) {
        this.currentView.dispose();
        this.currentView = null;
      }
      if ((prevController != null) && prevController !== this) {
        prevController.destructor();
      }
      return appState.set('prevController', this);
    };

    Controller.prototype.onAfterRequest = function() {};

    Controller.prototype.destructor = function() {
      if (this.currentView != null) {
        return this.currentView.dispose();
      }
    };

    return Controller;

  })();
});
