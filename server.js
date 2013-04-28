
define(function(require, exports, module) {
  var getQuerySringParams, json, _buildResponse;
  require('sinon');
  json = {
    users: JSON.parse(require('text!assets/json/users.json')),
    meetups: JSON.parse(require('text!assets/json/meetups.json'))
  };
  _buildResponse = function(content, status) {
    if (status == null) {
      status = 200;
    }
    return [
      status, {
        'Content-Type': 'application/json'
      }, content
    ];
  };
  getQuerySringParams = function(url) {
    var key, pair, pairs, params, queryString, _i, _len;
    params = {};
    url = decodeURIComponent(url.replace(/\+/g, ' '));
    queryString = url.replace(/^.*?\?/, '');
    pairs = queryString.split('&');
    for (_i = 0, _len = pairs.length; _i < _len; _i++) {
      pair = pairs[_i];
      key = pair.split('=');
      if (key.length > 1) {
        params[key[0]] = key[1];
      }
    }
    return params;
  };
  exports.start = function() {
    var req, requests, server, _createUser, _fn, _getUser, _getUsers, _i, _len, _randBool;
    server = sinon.fakeServer.create();
    server.autoRespond = true;
    server.autoRespondAfter = 50;
    _getUser = function(xhr, id) {
      var data, response, status, user;
      user = null;
      id = parseInt(id);
      user = _(json.users).findWhere({
        id: id
      });
      if (user) {
        data = user;
        status = 200;
      } else {
        data = {
          error: 'User not found'
        };
        status = 404;
      }
      response = _buildResponse(JSON.stringify(data), status);
      return xhr.respond.apply(xhr, response);
    };
    _getUsers = function(xhr, queryString) {
      var data, id, items, pageSize, params, response, skip;
      params = getQuerySringParams(xhr.url);
      items = json.users.concat((function() {
        var _i, _results;
        _results = [];
        for (id = _i = 20; _i <= 100; id = ++_i) {
          _results.push(_createUser(id));
        }
        return _results;
      })());
      skip = parseInt(params.$skip) || 0;
      pageSize = parseInt(params.$top) || items.length;
      data = JSON.stringify({
        items: items.slice(skip, skip + pageSize),
        __count: items.length
      });
      response = _buildResponse(data);
      return xhr.respond.apply(xhr, response);
    };
    _randBool = function() {
      return !!_.random(0, 1);
    };
    _createUser = function(id) {
      var index;
      index = _randBool() ? 1 : 0;
      return _.extend({}, json.users[index], {
        id: id,
        status: _randBool() ? 'ADMIN' : 'INVITED',
        tout_settings: _randBool() ? 'AUTO_PUBLISH' : 'MODERATE TOUTS'
      });
    };
    requests = [
      {
        method: 'GET',
        route: '/test',
        response: '{"id": 12, "comment": "Hey"}'
      }, {
        method: 'GET',
        route: '/getFriends',
        response: '[{"id":1, "name": "Acme 1",  "url": "http://acme1.com", "logoSrc":"/assets/img/mock_img.png"},{"id":2, "name": "Acme 2",  "url": "http://acme2.com", "logoSrc":"/assets/img/mock_img.png"},{"id":3, "name": "Acme 3",  "url": "http://acme3.com", "logoSrc":"/assets/img/mock_img.png"}]'
      }, {
        method: 'GET',
        route: /\/organization\/users(\?.*?)?$/,
        response: _getUsers
      }, {
        method: 'GET',
        route: /\/organization\/user\/(\d+)/,
        response: _getUser
      }, {
        method: 'GET',
        route: '/shedule/meetups/',
        response: JSON.stringify(json.meetups)
      }
    ];
    _fn = function(req) {
      var response;
      if (_.isFunction(req.response)) {
        response = req.response;
      } else {
        response = _buildResponse(req.response);
      }
      return server.respondWith(req.method, req.route, response);
    };
    for (_i = 0, _len = requests.length; _i < _len; _i++) {
      req = requests[_i];
      _fn(req);
    }
  };
});
