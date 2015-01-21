var borgdash = require('../borgdash.js');

describe("borgdash", function() {

  it("Must have a function named mini()", function() {
     
     expect( borgdash.min ).toBeDefined();

  });

  it("Retrieves the minimum value of a collection", function() {
    var test_array = [22, 1, 33, 4, 6];

    var result = borgdash.min(test_array);

    expect( result ).toEqual(1);

  });

  it("If collection is empty or falsey return Infinity", function() {
    var test_array = null;

    var result2 = borgdash.min(test_array);
    expect( result2 ).toBe( Infinity );


  });
  
});