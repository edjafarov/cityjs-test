var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require, exports, module) {
  var BaseView, MyView, tpl;
  tpl = require('text!./templates/shedule.html');
  BaseView = require('shared/base_view');
  exports.View = MyView = (function(_super) {

    __extends(MyView, _super);

    function MyView() {
      this.render = __bind(this.render, this);
      return MyView.__super__.constructor.apply(this, arguments);
    }

    MyView.prototype.template = _.template(tpl);

    MyView.prototype.initialize = function(meetups) {
      this.meetups = meetups.meetups;
    };

    MyView.prototype.render = function() {
      var _this = this;
      console.log("Meetups");
      this.meetups.fetch({
        success: function() {
          console.log("Meetups fetched");
          console.log(_this.meetups);
          return _this.$el.html(_this.template({
            data: {
              meetups: _this.meetups.models
            }
          }));
        },
        error: function() {
          console.log("err");
          return console.log(arguments);
        }
      });
      return this;
    };

    return MyView;

  })(BaseView);
});
