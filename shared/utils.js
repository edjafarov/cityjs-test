
define(['exports'], function(exports) {
  exports.bindRoutes = function(Router, packages) {
    var method, packageEl, pkg, route, _fn, _i, _len, _ref;
    for (_i = 0, _len = packages.length; _i < _len; _i++) {
      packageEl = packages[_i];
      pkg = new packageEl();
      _ref = pkg.routes;
      _fn = function(pkg, route, method) {
        return Router.route(route, method, function() {
          var argsWithDetails;
          argsWithDetails = Array.prototype.slice.call(arguments);
          argsWithDetails.unshift(method);
          pkg.onBeforeRequest.apply(pkg, argsWithDetails);
          pkg[method].apply(pkg, arguments);
          return pkg.onAfterRequest.apply(pkg, argsWithDetails);
        });
      };
      for (route in _ref) {
        method = _ref[route];
        _fn(pkg, route, method);
      }
    }
  };
});
