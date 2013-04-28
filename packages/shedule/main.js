var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require, exports, module) {
  var BaseController, Controller, collection_meetups, model_meetup, view, view_meetup;
  BaseController = require('shared/base_controller');
  view = require('./view');
  view_meetup = require('./view_meetup');
  collection_meetups = require('./collection_meetups');
  model_meetup = require('./model_meetup');
  exports.Controller = Controller = (function(_super) {

    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.routes = {
      'shedule': 'shedule',
      'shedule/:id': 'meetup'
    };

    Controller.prototype.shedule = function() {
      this.sheduleView = new view.View({
        meetups: new collection_meetups.Meetups()
      });
      $('#shedule-box').html(this.sheduleView.render().$el);
      return this;
    };

    Controller.prototype.meetup = function() {
      this.meetupView = new view_meetup.View({
        meetup: new model_meetup.Meetup()
      });
      $('#shedule-box').html(this.meetupView.render().$el);
      return this;
    };

    return Controller;

  })(BaseController);
});
