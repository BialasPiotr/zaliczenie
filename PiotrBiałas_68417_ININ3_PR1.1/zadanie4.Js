function checkBlock(str) {
  const quotes = { '"': '"', '»': '«', '(': ')' };
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char in quotes) {
      stack.push(char);
    } else if (quotes[stack[stack.length - 1]] === char) {
      stack.pop();
    }
  }
  if (stack.length === 0) {
    return 'Block closure is correct';
  } else {
    return `Error: unclosed blocks of type ${stack.toString()}`;
  }
}
