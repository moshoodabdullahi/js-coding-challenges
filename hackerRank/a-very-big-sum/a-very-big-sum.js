const aVeryBigSum = (ar) => {
  const addBigSum = ar.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return addBigSum;
};

module.exports = aVeryBigSum;
