
define(function(require, exports, module) {
  var Utils, demoPackage, friends, server, shedule;
  demoPackage = require('packages/demo');
  friends = require('packages/friends');
  shedule = require('packages/shedule');
  Utils = require('shared/utils');
  if (module.config().fakeServer) {
    server = require('server');
    server.start();
  }
  exports.App = Backbone.Router.extend({
    routes: {
      '*other': 'unknownRoute'
    },
    initialize: function() {
      return Utils.bindRoutes(this, [demoPackage.Controller, friends.Controller, shedule.Controller]);
    },
    unknownRoute: function() {
      return console.log('unknown route');
    }
  });
});
