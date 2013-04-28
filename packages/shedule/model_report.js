var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require, exports, module) {
  var ReportModel;
  exports.Report = ReportModel = (function(_super) {

    __extends(ReportModel, _super);

    function ReportModel() {
      return ReportModel.__super__.constructor.apply(this, arguments);
    }

    ReportModel.prototype.url = '/shedule/report/';

    ReportModel.prototype.defaults = {
      reporter_name: "Имя Докладчика",
      avatar_uri: "http://avatars.com/avatar.jpg",
      title: "Название доклада",
      uri_title: "inline-title-for-uri",
      text: "Это какой-то html описывающий доклад, там всякие ютюбики и слайды"
    };

    return ReportModel;

  })(Backbone.Model);
});
