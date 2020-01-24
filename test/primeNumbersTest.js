const isPrimeNumber = require("../primeNumbers")
const should = require("chai").should()

describe("Prime numbers", ()=> {
    it("should return true for prime number 3", ()=> {
       isPrimeNumber(3).should.be.true
    })
    it("should return true for prime number 9999999967", ()=> {
        isPrimeNumber(9999999967).should.be.true
    })
    it("should return false for non prime number 1000000000", ()=> {
        isPrimeNumber(1000000000).should.be.false
    })
})