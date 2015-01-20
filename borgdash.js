// We are Borg. You are Borg. 
// To fully become Borg you must compute the following array functions in Javascript
// *** YOU MUST COMPLY ***


// First Array //
//test for n and if n is not available
//create new array
//create new array with variables 

module.exports = {
  
  first : function (array, n){
    if (n > 0){

      var newArray = [ ];

      for (var i = 0; i < n; i++) {
          newArray.push(array[i]);      
        }
        
      return newArray;

    }else{

      return array[0];
    }
  },

// Max (Array) //

  maxx : function (squirl){
    return Math.max.apply( null, squirl );

  },

// Min (Array) //
  
  mini : function (squirl){
    return Math.min.apply( null,squirl );
  },

// Intersection //

  matrix : function (b, c){
    //creating a new array
    var a = {};

    var results = [];

    //loop through arrays 
    for (var i = 0; i < c.length; i++) {
        a[c[i]] = true;
      }
    
    //loop through array1 and compare each value within each array
    for (var j = 0; j < b.length; j++) {
        if (a[b[j]])
          //push same values into new array
          results.push(b[j]);
    }

    return results;

  },//ends matrix - intersection

// Difference //

  differ : function(a, b){
    //set new array
    var c = [];
    var diff = [];

    //loop through arrays
    for (var i = 0; i < a.length; i++) {
       c[a[i]] = true;

    }//ends first for loop

    //loops through array b and deletes anything that is duplicated
    for (var j = 0; j < b.length; j++) {
       if (c[b[j]]){ 
          delete c[b[j]];
        }else{ 
          c[b[j]] = true;
        }
      }//ends second for loop

    //adds values that are not duplicated into a new array  
    for (var m in c){
      diff.push(Number(m));
    }

    return diff;

  },//ends differ

// Unique //

  uni : function( squirl ){
    
    //new array to return
    //filter each value in the array
    var newSquirl  = squirl.filter(function(curr, index, array){
      return array.indexOf(curr) == index;
    });

    return newSquirl;
  },

// Contain //

  contain : function( squirl, n ){

    var i = squirl.length;

    while (i--){
      if (squirl[i] === n) {
        return true;
        }
      }
        return false;
      
} 

};//end of module exports