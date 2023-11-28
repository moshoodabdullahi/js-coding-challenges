const aVeryBigSum = (ar) => {
  let addBigSum = 0;

  ar.forEach((element) => {
    addBigSum += element;
  });

  return addBigSum;
};

module.exports = aVeryBigSum;
