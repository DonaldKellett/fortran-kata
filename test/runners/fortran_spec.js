// Dummy tests (directly taken from the "Getting Started" example in http://mochajs.org)
// TODO: replace dummy tests with proper assertions

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});
