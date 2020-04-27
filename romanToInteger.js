/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanNumberArray = s.split("");
  let answer = 0;

  romanNumberArray.map((romanNum) => {
    switch(romanNum){
      case "I":
        answer += 1
        break;
      case "V":
        answer += 5
        break;
      case "X":
        answer += 10
        break;
      case "L":
        answer += 50
        break;
      case "C":
        answer += 100
        break;
      case "D":
        answer += 500
        break;
      case "M":
        answer += 1000
        break;
    }
  })

if(s.includes("IV") || s.includes("IX")){
  answer -= 2;
}

if(s.includes("XL") || s.includes("XC")){
  answer -= 20;
}

if(s.includes("CD") || s.includes("CM")){
  answer -= 200;
}   

return answer
};


