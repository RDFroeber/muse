var chai = require('chai'),
    expect = chai.expect;

describe('muse', function() {

  it('should create a basic app', function() {

    // ...and a code assertion.
    expect(2).to.be.above(0);

  });

  // You can have multiple tests in a suite.
  it('should have basic files', function() {
    expect(1).to.equal(1);
  });

});