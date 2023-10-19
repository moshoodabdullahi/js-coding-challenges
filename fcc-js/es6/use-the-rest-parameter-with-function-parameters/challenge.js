const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i += 1) {
    total += args[i];
  }
  return total;
};

console.log(sum);
