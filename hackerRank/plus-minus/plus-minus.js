const plusMinus = (arr) => {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;
  const n = arr.length;

  for (let i = 0; i < n; i += 1) {
    if (arr[i] > 0) {
      positiveCount += 1;
    } else if (arr[i] < 0) {
      negativeCount += 1;
    } else {
      zeroCount += 1;
    }
  }

  const positiveRatio = positiveCount / n;
  const negativeRatio = negativeCount / n;
  const zeroRatio = zeroCount / n;

  console.log(positiveRatio.toFixed(6));
  console.log(negativeRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
};

module.exports = plusMinus;
