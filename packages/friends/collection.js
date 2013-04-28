var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require, exports, module) {
  var Friends, model;
  model = require('./model');
  exports.Friends = Friends = (function(_super) {

    __extends(Friends, _super);

    function Friends() {
      return Friends.__super__.constructor.apply(this, arguments);
    }

    Friends.prototype.url = '/getFriends';

    Friends.prototype.model = model.Friend;

    Friends.prototype.validation = {
      'name': {
        required: true,
        msg: 'Company name is required'
      },
      'url': {
        required: true,
        msg: 'Company site url is required'
      }
    };

    return Friends;

  })(Backbone.Collection);
});
