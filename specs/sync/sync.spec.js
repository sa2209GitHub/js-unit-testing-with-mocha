const assert = require('assert')
const { expect } = require('chai')
const { add, sub, mul, div, replaceNonNumericArgumentsWithZeros } = require('../../03_sync/sync')

describe('Unit Testing Synchronous Code', () => {

    describe(`the 'replaceNonNumericArgumentsWithZeros() function`, () => {
        it('should replace all non-numeric parameters with zeros', () => {
            const result = replaceNonNumericArgumentsWithZeros([1, 2, 0.5, NaN, false, 'John', 20])
            expect(result).to.be.deep.eq([1, 2, 0.5, 0, 0, 0, 20])
        })
    })

    describe(`the 'add()' function`, () => {
        it('should return the result of adding two integers', () => {
            let result = add(2, 2)
            assert.equal(result, 4) // is equal to next example
            expect(result).to.be.equal(4)
        })
        it('should return the correct result of adding one or two floating point numbers', () => {
            let result = add(0.1, 0.2)
            expect(result).to.be.eq(0.3)
            result = add(0.1, 0.7)
            expect(result).to.be.eq(0.8)
            result = add(0.01, 0.05)
            expect(result).to.be.eq(0.06)
        })
        it('should be able to handle only one number', () => {
            let result = add(2)
            expect(result).to.be.eq(2)
            result = add(undefined, 2)
            expect(result).to.be.eq(2)
        })
        it('should be able to handle zero numbers', () => {
            const result = add()
            expect(result).to.be.eq(0)
        })
        it('should return the correct value even if any of the arguments is not a numeric value', () => {
            let result = add(2, 'test')
            expect(result).to.be.eq(2)
            result = add('test', 2)
            expect(result).to.be.eq(2)
            result = add('test', 'test')
            expect(result).to.be.eq(0)
        })
        it('should return the correct value even if any of the arguments is NaN', () => {
            let result = add(2, NaN)
            expect(result).to.be.eq(2)
            result = add(NaN, 2)
            expect(result).to.be.eq(2)
            result = add(NaN, NaN)
            expect(result).to.be.eq(0)
        })
    })

    describe(`the 'sub()' function`, () => {
        it('should return the result of subtracting the second integer from the first', () => {
            let result = sub(5, 2)
            expect(result).to.be.eq(3)
        })
        it('should return the result of subtracting the second number from the first', () => {
            result = sub(0.4, 0.1)
            expect(result).to.be.eq(0.3)
        })
        it('should be able to handle only one number', () => {
            let result = sub(2);
            expect(result).to.be.eq(2)
            result = sub(undefined,2)
            expect(result).to.be.eq(-2)
        })
        it('should be able to handle zero numbers', () => {
            const result = sub()
            expect(result).to.be.eq(0)
        })
        it('should return the correct value even if any of the arguments is not a number', () => {
            let result = sub(2, 'test')
            expect(result).to.be.eq(2)
            result = sub('test', 2)
            expect(result).to.be.eq(-2)
            result = sub('test', 'test')
            expect(result).to.be.eq(0)
        })
        it('should return the correct value even if any of the arguments is NaN', () => {
            let result = sub(2, NaN)
            expect(result).to.be.eq(2)
            result = sub(NaN, 2)
            expect(result).to.be.eq(-2)
            result = sub(NaN, NaN)
            expect(result).to.be.eq(0)
        })
    })

    describe(`the 'mul()' function`, () => {
        it('should return the result of multiplying two integers', () => {
            let result = mul(2, 3)
            expect(result).to.be.eq(6)
        })
        it('should return the correct result of multiplying one or two floating point numbers', () => {
            result = mul(0.2, 0.3)
            expect(result).to.be.eq(0.06)
            result = mul(0.5, 0.9)
            expect(result).to.be.eq(0.45)
            result = mul(0.3, 0.1)
            expect(result).to.be.eq(0.03)
        })
        it('should be able to handle only one number', () => {
            let result = mul(2)
            expect(result).to.be.eq(0)
            result = mul(undefined, 2)
            expect(result).to.be.eq(0)
        })
        it('should be able to handle zero numbers', () => {
            const result = mul()
            expect(result).to.be.eq(0)
        })
        it('should return the correct value even if any of the arguments is not a numeric value', () => {
            let result = mul(2, 'test')
            expect(result).to.be.eq(0)
            result = mul('test', 2)
            expect(result).to.be.eq(0)
            result = mul('test', 'test')
            expect(result).to.be.eq(0)
        })
        it('should return the correct value even if any of the arguments is NaN', () => {
            let result = mul(2, NaN)
            expect(result).to.be.eq(0)
            result = mul(NaN, 2)
            expect(result).to.be.eq(0)
            result = mul(NaN, NaN)
            expect(result).to.be.eq(0)
            result = mul(2232.00, 0.1)
            expect(result).to.be.eq(223.2)
        })
    })

// 'should return the result of adding two integers', () => {
// 'should return the correct result of adding one or two floating point numbers', () => {
// 'should be able to handle only one number', () => {
// 'should be able to handle zero numbers', () => {
// 'should return the correct value even if any of the arguments is not a numeric value', () => {
// 'should return the correct value even if any of the arguments is NaN', () => {

    describe(`the 'div()' function`, () => {
        it('should return NaN if the divisor is zero', () => {
            const result = div(6, 0)
            expect(result).to.be.NaN;
        })
        it('should return the result of dividing the first integer by the second', () => {
            const result = div(6, 2)
            expect(result).to.be.eq(3)
        })
        it('should reyurn the correct result of dividing one or two floating point numbers', () => {
            const result = div(60.0, 4.4)
            expect(result).to.be.eq(13.6364)
        })
        it('should be able to handle only one number', () => {
            let result = div(6)
            expect(result).to.be.NaN
            result = div(undefined, 2)
            expect(result).to.be.eq(0)
        })
        it('should be able to handle zero numbers', () => {
            const result = div()
            expect(result).to.be.NaN
        })
    })
})
