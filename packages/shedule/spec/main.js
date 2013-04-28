var expect;

expect = chai.expect;

describe('Test', function() {
  var dep;
  dep = null;
  beforeEach(function(done) {
    return require([], function(_dep) {
      dep = _dep;
      return done();
    });
  });
  return it('should be test', function(done) {
    return done();
  });
});
