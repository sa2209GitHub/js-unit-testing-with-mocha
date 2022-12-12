const pow = (number, power) => {
    if (power < 0 || Math.round(power) !== power) return NaN

    return number ** power
}