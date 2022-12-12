const done = require('../../01_intro/detectsMultipleCallsTo')

describe('#done() method', function() {
    it('should only be called once', function(done) {
        setImmediate(done)
        // setImmediate(done)      // Calling 'done()' twice is an error
    })
})