const aVeryBigSum = (ar) => {
  let addBigSum = 0;
  for (let i = 0; i < ar.length; i += 1) {
    addBigSum += ar[i];
  }
  return addBigSum;
};

module.exports = aVeryBigSum;
