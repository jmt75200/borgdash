var borgdash = require('../borgdash.js');

describe("borgArray", function() {
  

  it("Must be a function; have function named first()", function() {

    expect( borgdash.first ).toBeDefined();
    
  });

  it("Must get the first element of the first array argument", function (){
    var test_array = ["fish","dog","taku","panda","unicorn"];

    var result = borgdash.first(test_array);

    expect( result ).toBe("fish");

  });

  it("Returns the n elements of the first array argument", function() {
    var test_array = ["fish","dog","taku","panda","unicorn"];

    var result2 = borgdash.first(test_array, 2);
    expect( result2 ).toEqual( ["fish","dog"] );

    var result3 = borgdash.first(test_array, 5);
    expect( result3 ).toEqual( ["fish","dog","taku","panda","unicorn"] );
    
  });


});