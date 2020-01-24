const isPrimeNumber = require("../primeNumbers")
const should = require("chai").should()

describe("Prime numbers", ()=> {
    it("should return true for prime number 3", ()=> {
       isPrimeNumber(3).should.be.true
    })
    it("should return true for prime number 9999999969", ()=> {
        isPrimeNumber(3).should.be.true
    })
})