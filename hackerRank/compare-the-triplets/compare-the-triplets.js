const compareTriplets = (a, b) => {
  let aliceScore = 0;
  let bobScore = 0;

  for (let i = 0; i < 3; i += 1) {
    if (a[i] > b[i]) {
      aliceScore += 1;
    } else if (a[i] < b[i]) {
      bobScore += 1;
    }
  }

  return [aliceScore, bobScore];
};

module.exports = compareTriplets;
