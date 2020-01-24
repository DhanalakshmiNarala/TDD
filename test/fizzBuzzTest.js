const fizzBuzz = require('../fizzBuzz')
const assert = require('chai').assert

describe('fizzBuzz', ()=> {
    it('should return fizz for multiple of 3', ()=> {
        assert.equal(fizzBuzz(6, 6), ["fizz"])
    })
})
    