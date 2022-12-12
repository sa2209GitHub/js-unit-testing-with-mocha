const done = require('../src/detectsMultipleCallsTo')

describe('done function', function() {
    it('double done', function(done) {
        // Calling 'done()' twice is an error
        setImmediate(done)
        setImmediate(done)
    })
})