var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require, exports, module) {
  var CollectionView, view;
  view = require('./view');
  exports.View = CollectionView = (function(_super) {

    __extends(CollectionView, _super);

    function CollectionView() {
      return CollectionView.__super__.constructor.apply(this, arguments);
    }

    CollectionView.prototype.render = function() {
      var _this = this;
      this.$el = $("<ul class='thumbnails'></ul>");
      this.collection.fetch({
        success: function() {
          var friend, model, _i, _len, _ref, _view;
          _ref = _this.collection.models;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            model = _ref[_i];
            friend = _this.collection.get(model);
            _view = new view.View({
              model: friend
            });
            _this.$el.append(_view.render().$el);
          }
          return _this;
        }
      });
      return this;
    };

    return CollectionView;

  })(Backbone.View);
});
