const fibonnaciNumbers = require("../fibonacci")
const should = require("chai").should()

describe("Fibonnaci numbers", ()=> {
    it("should return 1 for first fibonnaci number", ()=> {
        fibonnaciNumbers(1, 1).should.deep.equal([1])
    })

    it("should return 1 for second fibonnaci number", ()=> {
        fibonnaciNumbers(2, 2).should.deep.equal([1])
    })

    it("should return 21 form 8th fibonnaci number", ()=> {
        fibonnaciNumbers(8, 8).should.deep.equal([21])
    })

    it("shoul work for 1 to 10 range numbers", ()=> {
        let expectedResult = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
        fibonnaciNumbers(1, 10).should.deep.equal(expectedResult)
    })

    it("should work for large number 53", ()=> {
        let result = 53316291173
        fibonnaciNumbers(53, 53).should.deep.equal([result])
    })
})