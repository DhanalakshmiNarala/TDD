const fibonnaciNumbers = (range)=> {
    let result = []
    for(let i=1; i<=range; i++)
        result.push(nthFibonnaciNumber(i))
    return result
}

const nthFibonnaciNumber = (n)=> {
    if(n == 1 || n == 2)
        return 1
}


module.exports = fibonnaciNumbers