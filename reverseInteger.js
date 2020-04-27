
/**
 * @param {number} x
 * @return {number}
 */

 // my solution 
const reverse = function(x) {
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

// official Leetcode solution : Approach 1: Pop and Push Digits & Check before Overflow

const reverseOfficial = function(x){ // e.g. x = 234
  let rev = 0;
  let k = x > 0 ? 1 : -1
  x = Math.abs(x)

  while (x != 0){

    
    const pop = x % 10; // pop will equal 4

    x = Math.floor(x / 10); // x will now be 23

    rev = (rev * 10) + pop // equal to 4
   
  }

  if(rev > Math.pow(2, 31) || rev < -Math.pow(2,31) - 1){
    return 0
  }

  return rev*k

}

console.log(reverseOfficial(-234))

