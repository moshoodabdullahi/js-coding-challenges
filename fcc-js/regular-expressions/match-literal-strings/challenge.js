const waldoIsHiding = 'Somewhere Waldo is hiding in this text.';
const waldoRegex = /Waldo/;
const result = waldoRegex.test(waldoIsHiding);
console.log(result);
