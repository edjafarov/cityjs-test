var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require, exports, module) {
  var Meetup, MeetupsCollection, Report;
  Meetup = require('./model_meetup');
  Report = require('./model_report');
  exports.Meetups = MeetupsCollection = (function(_super) {

    __extends(MeetupsCollection, _super);

    function MeetupsCollection() {
      return MeetupsCollection.__super__.constructor.apply(this, arguments);
    }

    MeetupsCollection.prototype.url = "/shedule/meetups/";

    MeetupsCollection.prototype.model = Meetup.Meetup;

    MeetupsCollection.prototype.parse = function(meetups) {
      var meetup, report, reports, _i, _j, _len, _len1, _ref;
      for (_i = 0, _len = meetups.length; _i < _len; _i++) {
        meetup = meetups[_i];
        reports = [];
        _ref = meetup.reports;
        for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
          report = _ref[_j];
          reports.push(new Report.Report(report));
        }
        meetup.reports = reports;
      }
      return meetups;
    };

    return MeetupsCollection;

  })(Backbone.Collection);
});
