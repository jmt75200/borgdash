var minArray = require('../borgdash.js');

describe("minArray", function() {

  it("Must have a function named mini()", function() {
     
     expect( minArray.mini ).toBeDefined();

  });

  it("Retrieves the minimum value of a collection", function() {
    var test_array = [22, 1, 33, 4, 6];

    var result = minArray.mini(test_array);

    expect( result ).toEqual(1);

  });

  it("If collection is empty or falsey return Infinity", function() {
    var test_array = null;

    var result2 = minArray.mini(test_array);
    expect( result2 ).toBe( Infinity );


  });
  
});