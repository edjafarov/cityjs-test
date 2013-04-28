var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require, exports, module) {
  var Friend;
  exports.Friend = Friend = (function(_super) {

    __extends(Friend, _super);

    function Friend() {
      return Friend.__super__.constructor.apply(this, arguments);
    }

    Friend.prototype.url = '/getFriend';

    Friend.prototype.defaults = {
      name: 'Acme Company',
      url: 'www.acme.com',
      logoSrc: '/assets/img/mock_img.png'
    };

    Friend.prototype.validation = {
      'name': {
        required: true,
        msg: 'Company name is required'
      },
      'url': {
        required: true,
        msg: 'Company site url is required'
      }
    };

    return Friend;

  })(Backbone.Model);
});
