const fibonnaciNumbers = require("../fibonacci")
const should = require("chai").should()

describe("Fibonnaci numbers", ()=> {
    it("should return 1 for first fibonnaci number", ()=> {
        fibonnaciNumbers(1, 1).should.deep.equal([1])
    })
    it("should return 1 for second fibonnaci number", ()=> {
        fibonnaciNumbers(2, 2).should.deep.equal([1])
    })
    it("should return 8 form 6th fibonnaci number", ()=> {
        fibonnaciNumbers(8, 8).should.deep.equal([8])
    })
})