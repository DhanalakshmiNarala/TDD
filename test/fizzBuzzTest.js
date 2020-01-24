const fizzBuzz = require("../fizzBuzz")
const should = require("chai").should()

describe("fizzBuzz", ()=> {
    it("should return 'Fizz' for multiple numbers of 3", ()=> {
        fizzBuzz(6, 6).should.deep.equal(["Fizz"])
    })

    it("should return 'Buzz' for multiple numbers of 5", ()=> {
        fizzBuzz(10, 10).should.deep.equal(["Buzz"])
    })

    it("should return 'Fizz Buzz' for multiple number of 3 and 5", ()=> {
        fizzBuzz(15, 15).should.deep.equal(["Fizz Buzz"])
    })

    it("should return same number for neither multiple of 3 nor multiple of 5", ()=> {
        fizzBuzz(11, 11).should.deep.equal([11])
    })

    it("same pattern should work for large range of numbers", ()=> {
        let expectedResult = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 
                            11, "Fizz", 13, 14, "Fizz Buzz", 16, 17, "Fizz", 19, "Buzz",
                            "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "Fizz Buzz", 
                            31, 32, "Fizz", 34, "Buzz", "Fizz"]
        fizzBuzz(1, 36).should.deep.equal(expectedResult)
    })
})
    