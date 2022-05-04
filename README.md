# symbol sort using recursive programming
this symbol sort will check the input and rearrange the input symbol, in this case we have to sort symbol to be '()'.

return true if the input symbol can be sort, and else return false. Other requirement is the symbol must in pair, return false if it's not.


## The Code
```
const symbolRecursive = (symbol) => {
  // console.log('symbol', symbol)
  if (symbol.length > 0) {
    if (symbolArr.length % 2 === 0) {
      const symbolIndex = symbol.indexOf('(');

      if (symbolIndex != -1) {
        symbolArr.push(symbol[symbolIndex]);
        return symbolRecursive(symbol.replace('(', ''));
      }

      return false;
    }
    else {
      const symbolIndex = symbol.indexOf(')');

      if (symbolIndex != -1) {
        symbolArr.push(symbol[symbolIndex]);
        return symbolRecursive(symbol.replace(')', ''));
      }

      return false;
    }
  }
  else if (symbolArr.length > 0) {
    if (symbolArr.length % 2 === 0) return true;
    return false;
  }
  else
    return false;
}
```

You can find the full code in index.js
