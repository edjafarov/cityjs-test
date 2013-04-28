var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require, exports, module) {
  var View, tpl;
  tpl = require('text!./templates/friend.html');
  exports.View = View = (function(_super) {

    __extends(View, _super);

    function View() {
      return View.__super__.constructor.apply(this, arguments);
    }

    View.prototype.template = _.template(tpl);

    View.prototype.initialize = function() {
      if (this.model != null) {
        Backbone.Validation.bind(this);
      }
    };

    View.prototype.render = function() {
      this.$el = this.template({
        company: this.model.toJSON()
      });
      return this;
    };

    return View;

  })(Backbone.View);
});
