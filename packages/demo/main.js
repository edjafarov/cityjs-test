var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require, exports, module) {
  var BaseController, Controller, model, view;
  view = require('./view');
  model = require('./model');
  BaseController = require('shared/base_controller');
  exports.Controller = Controller = (function(_super) {

    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.routes = {
      'demo': 'demo',
      'demo/:id': 'demo'
    };

    Controller.prototype.demo = function() {
      console.log('demo');
      this.currentView = new view.View({
        model: new model.Model()
      });
      $('#demo-box').html(this.currentView.render().$el);
      return this;
    };

    return Controller;

  })(BaseController);
});
