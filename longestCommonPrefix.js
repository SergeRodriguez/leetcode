/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0){
      return ""
    }

    let longestCommonPrefixString = "";

    for(i =  0; i < strs[0].length; i++){
      let add = true
      for(j = 0; j < strs.length - 1; j ++){
        if(strs[j][i] !== strs[j+1][i]){
          add = false;
          break;
        } 
      }
          if(add){
            longestCommonPrefixString += strs[0][i]
          }
          else{
            break;
          }
    }
  
   return longestCommonPrefixString
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["aca","cba"]))