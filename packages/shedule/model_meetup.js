var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require, exports, module) {
  var MeetupModel;
  exports.Meetup = MeetupModel = (function(_super) {

    __extends(MeetupModel, _super);

    function MeetupModel() {
      return MeetupModel.__super__.constructor.apply(this, arguments);
    }

    MeetupModel.prototype.url = '/shedule/meetup/';

    MeetupModel.prototype.defaults = {
      id: 0,
      title: 'Meetup name',
      description: 'Short description of meetup.',
      city: 'The city of meetup',
      place: 'Short comments for meetup place. Room number, street etc.',
      reports: []
    };

    return MeetupModel;

  })(Backbone.Model);
});
