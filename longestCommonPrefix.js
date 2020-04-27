/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = function(strs) {
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

// Leetcode Algorithm Proposed solution 

const longestCommonPrefixLeetcode = function(strs){
  if (strs.length === 0) return "";
    let prefix = strs[0];
    for (i = 1; i < strs.length; i++)
        while (strs[i].indexOf(prefix) != 0) {
            console.log("prefix:", prefix)
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix.length === 0) return "";
        }        
    return prefix;

}

console.log(longestCommonPrefixLeetcode(["flower","flow","flight"]))
console.log(longestCommonPrefixLeetcode(["aca","cba"]))