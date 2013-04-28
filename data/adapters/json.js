
define(function(require, exports, module) {
  var validate;
  validate = function(data) {
    return _(data).isObject();
  };
  return exports.parse = function(data, result, callback) {
    var resultData;
    if (!validate(data.content)) {
      return callback(null, data, result);
    }
    resultData = {
      url: data.url
    };
    return callback(null, data, _.extend(result, data.content, resultData));
  };
});
