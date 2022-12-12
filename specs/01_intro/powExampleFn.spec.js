const assert = require('assert')

describe('#pow() method', function() {
    const powFn = require('../../01_intro/powExampleFn')

    it('should correctly raise the number to the right power', function() {
        assert.equal(powFn(2, 3), 8)
        // assert.equal(pow(3, 3), 27)
    })
})