const fizzBuzz = (startRange, endRange)=> {
    let result = []
    for(let num = startRange; num <= endRange; num++) {
        result.push(getText(num))
    }
    return result
}

const getText = (num)=> {
    if(num % 3 == 0 && num %  5 == 0)
        return "fizzbuzz"
    if(num % 3 == 0)
        return "fizz"
    if(num % 5 == 0)
        return "buzz"
    return num
}

module.exports = fizzBuzz