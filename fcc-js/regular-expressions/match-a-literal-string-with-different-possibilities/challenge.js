const petString = 'James has a pet cat.';
const petRegex = /dog|cat|bird|fish/;
const result = petRegex.test(petString);
console.log(result);
