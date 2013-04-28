var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require, exports, module) {
  var BaseView, MyView, tpl;
  tpl = require('text!./templates/meetup.html');
  BaseView = require('shared/base_view');
  exports.View = MyView = (function(_super) {

    __extends(MyView, _super);

    function MyView() {
      this.render = __bind(this.render, this);
      return MyView.__super__.constructor.apply(this, arguments);
    }

    MyView.prototype.template = _.template(tpl);

    MyView.prototype.initialize = function(meetup) {
      this.meetup = meetup.meetup;
    };

    MyView.prototype.render = function() {
      this.meetup.fetch("1", function() {
        var _this = this;
        return {
          success: function() {
            return _this.$el.html(_this.template({
              data: {
                meetup: _this.meetup.attributes
              }
            }));
          },
          error: function() {
            console.log("err");
            return console.log(arguments);
          }
        };
      });
      return this;
    };

    return MyView;

  })(BaseView);
});
