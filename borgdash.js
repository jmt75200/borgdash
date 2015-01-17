// We are Borg. You are Borg. 
// To fully become Borg you must compute the following array functions in Javascript
// *** YOU MUST COMPLY ***

module.exports = {
  
  first : function (array, n){
    if (n > 0){
      //create new array
      var newArray = [ ];

      //create new array with variables 
      for (var i = 0; i < n; i++) {
          newArray.push(array[i]);      
        }
        
      return newArray;

    }else{

      return array[0];
    }
  }

};