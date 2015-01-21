var borgdash = require('../borgdash.js');

describe("borgdash", function() {
  
  it("Must have a function named max()", function(){

    expect( borgdash.max ).toBeDefined();

  });//first it :: checks for max function ::

  it("Retrieves the maximum value of a collection.", function() {
    var test_array = [2,6,7,9];

    var result = borgdash.max(test_array);
    expect( result ).toBe(9);


  });//second it :: retrieves maximum value of a collection ::

  it("If the collection is empty or falsey -Infinity is returned.", function() {
    var test_array = null;

    var result2 = borgdash.max(test_array);
    expect( result2 ).toBe(-Infinity);
     


  });//third it :: return for empty or false arrays ::

});
