const fibonnaciNumbers = require("../fibonacci")
const should = require("chai").should()

describe("Fibonnaci numbers", ()=> {
    it("should return 1 for first fibonnaci number", ()=> {
        fibonnaciNumbers(1).should.deep.equal([1])
    })
})