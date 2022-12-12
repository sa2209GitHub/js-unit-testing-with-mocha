// describe('test', () => {
//     before(() => alert('testing has begun — before the tests'))
//     after(() => alert('testing finished — after all tests'))

//     beforeEach(() => alert('before the test — start doing the test'))
//     afterEach(() => alert('after the test — finish the test'))

//     it('first test', () => alert(1))
//     it('second test', () => alert(2))
// })

describe('#pow() method', () => {
    // 1
    // it('2 to the power of 3 should be 8', () => {
    //     assert.equal(pow(2, 3), 8)
    // })
    // it('3 to the power of 3 should be 27', () => {
    //     assert.equal(pow(3, 3), 27)
    // })
    // it('4 to the power of 3 should be 64', () => {
    //     assert.equal(pow(4, 3), 64)
    // })

    // 2
    // const makeTests = x => {
    //     let expected = x * x * x
    //     it(`${x} to the power of 3 sould be ${expected}`, () => {
    //         assert.equal(pow(x, 3), expected)
    //     })
    // }

    // for (let x = 1; x <= 5; x++) {
    //     makeTests(x)
    // }

    describe('raises x to the power of 2', () => {
        const makeTests = x => {
            let expected = x * x

            it(`${x} to the power of 3 sould be ${expected}`, () => {
                assert.equal(pow(x, 2), expected)
            })
        }
        for (let x = 1; x <= 5; x++) {
            makeTests(x)
        }
    })

    describe('raises x to the power of 3', () => {
        const makeTests = x => {
            let expected = x * x * x

            it(`${x} to the power of 3 sould be ${expected}`, () => {
                assert.equal(pow(x, 3), expected)
            })
        }
        for (let x = 1; x <= 5; x++) {
            makeTests(x)
        }
    })

    it('should return NaN for negative n', () => {
        assert.isNaN(pow(2, -1))
    })
    
    it('should return NaN for fractional n', () => {
        assert.isNaN(pow(2, 1.5))
    })
})