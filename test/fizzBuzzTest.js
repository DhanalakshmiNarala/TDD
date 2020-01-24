const fizzBuzz = require('../fizzBuzz')
const should = require('chai').should()

describe('fizzBuzz', ()=> {
    it('should return fizz for multiple of 3', ()=> {
        fizzBuzz(6, 6).should.deep.equal(["fizz"])
    })
})
    