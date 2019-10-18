module.exports = function multiply(first, second) {
    // your solution
    console.log(first)
    console.log(second)
    var n_first = BigInt(first)
    var n_second = BigInt(second)
    var multiply_num = n_first * n_second
    console.log(multiply_num)
    return String(multiply_num)
}