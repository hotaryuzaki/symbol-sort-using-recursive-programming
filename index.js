// IN THIS CASE WE HAVE TO SORT SYMBOL TO BE '()'
// RETURN TRUE IF THE INPUT SYMBOL CAN BE SORT, AND ELSE RETURN FALSE
let symbolArr = [];
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

const z = symbolRecursive('())()())');
console.log(z);
