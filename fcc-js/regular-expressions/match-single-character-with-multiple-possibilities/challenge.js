const quoteSample =
  'Beware of bugs in the above code; I have only proved it correct, not tried it.';
const vowelRegex = /[aeiou]/gi;
const result = quoteSample.match(vowelRegex);
console.log(result);
