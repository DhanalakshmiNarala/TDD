const isPrimeNumber = require("../primeNumbers")
const should = require("chai").should()

describe("Prime numbers", ()=> {
    it("should return true for number 3", ()=> {
        isPrimeNumbers(3).should.be(3)
    })
})