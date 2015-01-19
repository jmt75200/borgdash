var maxArray = require('../borgdash.js');

describe("maxArray", function() {
  
  it("Must have a function named Max()", function(){

    expect( maxArray.maxx ).toBeDefined();

  });//first it :: checks for max function ::

  it("Retrieves the maximum value of a collection.", function() {
    var test_array = [2,6,7,9];

    var result = maxArray.maxx(test_array);
    expect( result ).toBe(9);


  });//second it :: retrieves maximum value of a collection ::

  it("If the collection is empty or falsey -Infinity is returned.", function() {
    var test_array = null;

    var result2 = maxArray.maxx(test_array);
    expect( result2 ).toBe(-Infinity);
     


  });//third it :: return for empty or false arrays ::

});
