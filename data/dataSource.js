
define(function(require, exports, module) {
  var adapters, async, get, getOne, mapper, observer, proxy;
  observer = {};
  adapters = [];
  proxy = require('data/cors/proxy');
  async = require('async');
  _.extend(observer, Backbone.Events);
  require(module.config().adapters, function() {
    adapters = [];
    return _(arguments).each(function(elem, key) {
      return adapters[key] = _(elem).value();
    });
  });
  getOne = function(url, initial, callback) {
    if (_(initial).isFunction()) {
      callback = initial;
      initial = {};
    }
    if (url.indexOf('http://') === -1 && initial.origin) {
      url = ['http://', initial.origin, url].join('');
    }
    return proxy.getUrl(url, initial, function(err, data) {
      var chain;
      chain = [
        function(callback) {
          return callback(null, data, initial);
        }
      ].concat(adapters);
      return async.waterfall(chain, function(err, data, result) {
        return callback(err, data, result);
      });
    });
  };
  mapper = function(item, callback) {
    return get(item.url, item, callback);
  };
  get = function(url, initial, callback) {
    if (initial == null) {
      initial = {};
    }
    if (_(initial).isFunction()) {
      callback = initial;
      initial = {};
    }
    return getOne(url, initial, function(err, data, result) {
      if (_(result).isArray()) {
        return async.map(result, mapper, function(err, results) {
          results = _.flatten(results);
          return callback(err, results);
        });
      } else {
        return callback(err, result);
      }
    });
  };
  return exports.source = function() {
    return {
      on: function(type, callback) {
        if (type instanceof Function) {
          type = 'data';
          callback = type;
        }
        return observer.bind(type, callback);
      },
      get: get
    };
  };
});
