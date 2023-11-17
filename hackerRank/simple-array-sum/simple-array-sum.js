const simpleArraySum = (ar) => {
  let sumOfArray = 0;
  for (let i = 0; i < ar.length; i += 1) {
    sumOfArray += ar[i];
  }
  return sumOfArray;
};

module.exports = simpleArraySum;
