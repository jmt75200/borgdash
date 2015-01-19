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

  
  

};//end of module exports

