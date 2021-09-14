// 20. 

function stringValidation(string) {
  let char = {
    type1: "(", type2: ")",
    type3: "{", type4: "}",
    type5: "[", type6: "]"
  }
  const stack = [];
  for (let i = 0; i < string.length; i++) {
    // If we encounter an opening bracket, we simply push it onto the stack
    if (string[i] === char.type1 || string[i] === char.type3 || string[i] === char.type5)
      stack.push(string[i]);

    // if we encounter a closing bracket, then we check the element on top of the stack. If the element at the top of the stack is an opening bracket of the same type, then we pop it off the stack and continue processing
    if (string[i] === char.type2 || string[i] === char.type4 || string[i] === char.type6) {
      if (string[i - 1] === char.type1 && string[i] === char.type2)
        stack.pop()

      if (string[i - 1] === char.type3 && string[i] === char.type4)
        stack.pop()

      if (string[i - 1] === char.type5 && string[i] === char.type6)
        stack.pop()
    }
  }
  return stack.length === 0 ? true : false;
}

stringValidation("(]");