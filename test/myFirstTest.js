const assert = require('assert')

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return the correct value or -1 when the value is not present', function() {
            assert.equal([1, 2, 3].indexOf(1), 0)
            assert.equal([1, 2, 3].indexOf(2), 1)
            assert.equal([1, 2, 3].indexOf(4), -1)
        })
    })
})