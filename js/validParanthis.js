const exp = "[()][()()]()";

const checkValid = (str) => {
  let stack = [];
  for (let char of str) {
    if (char == "(" || char == "{" || char == "[") {
      stack.push(char);
    } else if (char == ")" || char == "}" || char == "]") {
      if (stack.length == 0) {
        return false;
      }
      let last = stack.pop();
      if (
        (last !== "(" && char == ")") ||
        (last !== "{" && char == "}") ||
        (last !== "[" && char == "]")
      ) {
        return false;
      }
    }
  }

  return stack.length == 0;
};

const r = checkValid(exp);
console.log(r);
