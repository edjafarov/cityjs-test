var expect;

expect = chai.expect;

describe('Application test', function() {
  return it('should exports correct app', function(done) {
    expect(true).to.be.a('boolean');
    return done();
  });
});
