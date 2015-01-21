var borgdash = require('../borgdash.js');

describe("borgdash", function() {
    
  it("Must have differ() function", function() {
    
    expect( borgdash.difference ).toBeDefined();

  });

  it("Creates an array excluding all values of the provided arrays using strict equality for comparisons", function() {
    
    var array1 = [1, 20, 50, 99];
    var array2 = [99, 20, 50, 97];

    var result = borgdash.difference(array1, array2);

    expect( result ).toEqual([1, 97]);

  });

});