
define(function(require, exports, module) {
  var propMatcher, validate;
  validate = function(data) {
    return data.url.trim().slice(-5) === '.conf';
  };
  propMatcher = /^#+\s*([\w.]+)=(.*)$/;
  return exports.parse = function(data, result, callback) {
    var parser;
    if (!validate(data)) {
      return callback(null, data, result);
    }
    parser = function(lines, result, meta) {
      var addData, line, prop, props;
      if (result == null) {
        result = [];
      }
      if (meta == null) {
        meta = {};
      }
      if (lines.length === 0) {
        return result;
      }
      line = lines.shift();
      if (line.charAt(0) === '#' && line.indexOf('=') !== -1) {
        prop = propMatcher.exec(line);
        props = {};
        props[prop[1]] = prop[2];
        meta = _.extend(meta, props);
        return parser(lines, result, meta);
      } else if (line.charAt(0) !== '#' && line.length !== 0) {
        addData = {
          origin: data.origin,
          url: line.trim()
        };
        addData = _.extend(addData, meta);
        result.push(addData);
        meta = {};
      }
      return parser(lines, result, meta);
    };
    result = parser(data.content.split('\n'));
    return callback(null, data, result);
  };
});
