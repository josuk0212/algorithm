/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const match = {
    ")" : "(",
    "}" : "{",
    "]" : "["
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else if (match[s[i]]) {
      if (stack.length === 0 || stack[stack.length - 1] !== match[s[i]]) {
        return false;
      }
      stack.pop();
    }
  }
  
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};
