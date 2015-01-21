var borgdash = require('../borgdash.js');

describe("borgdash", function() {
  
   it("Must be a function unique()", function() {
     
    expect( borgdash.unique ).toBeDefined();

   });

   it("Create a duplicate-value-free array using equality for comparison", function() {
    var uni = [ 2, 3, 3, 4, 5, 6, 11, 20, 22, 20, 5];

    var result = borgdash.unique(uni);
    expect( result ).toEqual([ 2, 3, 4, 5, 6, 11, 20, 22]);
     
   });

});