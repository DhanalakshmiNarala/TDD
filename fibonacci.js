const fibonnaciNumbers = (rangeStart, rangeEnd)=> {
    let result = []
    for(let i=rangeStart; i<=rangeEnd; i++)
        result.push(nthFibonnaciNumber(i))
    return result
}

const fibonnaciList = []

const nthFibonnaciNumber = (n)=> {
    if(fibonnaciList[n])
        return fibonnaciList[n]
    if(n == 1 || n == 2)
        fibonnaciList[n] = 1
    else
        fibonnaciList[n] = nthFibonnaciNumber(n - 1) + nthFibonnaciNumber(n - 2)
    return fibonnaciList[n]
}

module.exports = fibonnaciNumbers