
/**
 * @param {string} s
 * @return {boolean}
 */
var map = {
  "(": ")",
  "[": "]",
  "{": "}"
}

var isValid = function (s) {
  var stack = [];

  for (var i = 0; i < s.length; i++) {
    var el = s[i];
    console.log("el: ", el)
    if (map[el]) {
      console.log("map[el]: ", map[el])
      stack.push(map[el]);
    } else {
      var popped = stack.pop()
      if (el !== popped) {
        console.log("stack.pop: ", popped)
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("{{[{]}}}"))