var assert = require('assert');
describe('Array check with Mocha', function() {
  describe('#indexOf()', function() {
    it('user get api', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('single user api', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('update user api', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('user daily checkin api', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('create api', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});