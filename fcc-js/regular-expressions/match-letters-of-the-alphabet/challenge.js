const quoteSample = 'The quick brown fox jumps over the lazy dog.';
const alphabetRegex = /[a-z]/gi;
const result = quoteSample.match(alphabetRegex);
console.log(result);
