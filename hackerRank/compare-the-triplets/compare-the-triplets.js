const compareTriplets = (a, b) => {
  let aliceScore = 0;
  let bobScore = 0;

  a.forEach((alice, i) => {
    const bob = b[i];

    if (alice > bob) {
      aliceScore += 1;
    } else if (alice < bob) {
      bobScore += 1;
    }
  });

  return [aliceScore, bobScore];
};

module.exports = compareTriplets;
