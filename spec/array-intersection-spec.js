var borgdash = require('../borgdash.js');

describe("borgdash", function() {
  
  it("Must have matrix() function", function() {
    
    expect( borgdash.matrix ).toBeDefined();

  });

  it("create multiple arrays and return an array of intersecting values", function() {

    var array1 =["apple", "cherry", "kiwi", "pear"];
    var array2 =["apple", "banna", "peach"];

    var result = borgdash.matrix(array1, array2);
    expect( result ).toEqual(["apple"]);

  });


});