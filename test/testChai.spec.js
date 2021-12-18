var chai = require('chai');
var assert = chai.assert;

//####### Assert #######

describe('Aspect check with Chai', () => {
    let text = "TestCase";
    it("Check String with Assert", () => {
        assert.typeOf(text,'string');
    })
})