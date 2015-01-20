var borgdash = require('../borgdash.js');

describe("borgdash", function() {
  
   it("Must be a function contain()", function() {
     
    expect( borgdash.contain ).toBeDefined();

   });

   it("Checks if a given value is present in a collection using strict equality for comparisons", function() {
     // var test_array = [1,3,66,7];

     var result = borgdash.contain([1,3,66,7], 2);

      expect( result ).toBe(false);

     var result2 = borgdash.contain([1,3,66,7], 66);

     expect( result2 ).toBe(true);

   });



});