/**
 * @param {number} x
 * @return {number}
 */

 // my solution 
var reverse = function(x) {
  if(x>0){

    if(parseInt(x.toString().split("").reverse().join("")) > 2147483647){
      return 0
    } 
    
      return parseInt(x.toString().split("").reverse().join(""))
    
  } else {
    if(parseInt(x.toString().split("").reverse().join("")) > 2147483647){
      return 0
    } 
    
      return -(parseInt(x.toString().split("").reverse().join("")))
  }
};