const simpleArraySum = (ar) => {
  let sumOfArray = 0;

  ar.forEach(function (i) {
    sumOfArray += i;
  });

  return sumOfArray;
};

module.exports = simpleArraySum;
