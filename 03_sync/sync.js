const Big = require('big-js')

const replaceNonNumericArgumentsWithZeros = (args) => {
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'number' || isNaN(args[i]))
            args[i] = 0;
    }

    return args
}

const add = (a = 0, b = 0) => {
    [ a, b ] = replaceNonNumericArgumentsWithZeros([a, b])

    if (Number.isInteger(a) && Number.isInteger(b))
        return a + b

    a = new Big(a)
    b = new Big(b)

    return Number(a.add(b).valueOf())
}

const sub = (a = 0, b = 0) => {
    [ a, b ] = replaceNonNumericArgumentsWithZeros([a, b])

    if (Number.isInteger(a) && Number.isInteger(b))
        return a - b

    a = new Big(a)
    b = new Big(b)

    return Number(a.minus(b).valueOf())
}

const mul = (a = 0, b = 0) => {
    [ a, b ] = replaceNonNumericArgumentsWithZeros([a, b])

    if (Number.isInteger(a) && Number.isInteger(b))
        return a * b

    a = new Big(a)
    b = new Big(b)

    return Number(a.times(b).valueOf())
}

const div = (a, b) => {
    [ a, b ] = replaceNonNumericArgumentsWithZeros([a, b])
    
    if (b === 0) 
        return NaN

    if (Number.isInteger(a) && Number.isInteger(b))
        return a / b

    a = new Big(a)
    b = new Big(b)

    return Number(Number(a.div(b).valueOf()).toFixed(4))
}

module.exports = {
    add,
    sub,
    mul,
    div,
    replaceNonNumericArgumentsWithZeros
}