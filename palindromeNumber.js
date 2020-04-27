/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){
      return false
    }

  let rev = 0;
  const initialX = x;

  while (x != 0){

    
    const pop = x % 10; // pop will equal 4

    x = Math.floor(x / 10); // x will now be 23

    rev = (rev * 10) + pop // equal to 4
   
  }

  if(initialX === rev){
    return true
  } else {
    return false
  }

};