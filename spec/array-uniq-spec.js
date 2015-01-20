var borgdash = require('../borgdash.js');

describe("borgdash", function() {
  
   it("Must be a function uni()", function() {
     
    expect( borgdash.uni ).toBeDefined();

   });

   it("Create a duplicate-value-free array using equality for comparison", function() {
    var uniq = [ 2, 3, 3, 4, 5, 6, 11, 20, 22, 20, 5];

    var result = borgdash.uni(uniq);
    expect( result ).toEqual([ 2, 3, 4, 5, 6, 11, 20, 22]);
     
   });

});