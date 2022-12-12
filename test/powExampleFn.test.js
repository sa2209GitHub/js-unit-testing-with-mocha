const assert = require('assert')

describe('#pow() method', function() {
    const pow = require('../src/powExampleFn')

    it('should correctly raise the number to the right power', function() {
        assert.equal(pow(2, 3), 8)
    })
})