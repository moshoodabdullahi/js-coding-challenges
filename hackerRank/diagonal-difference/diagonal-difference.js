function diagonalDifference(arr) {
  const n = arr.length;

  let primaryDiagonalSum = 0;
  let secondaryDiagonalSum = 0;

  for (let i = 0; i < n; i += 1) {
    primaryDiagonalSum += arr[i][i];
    secondaryDiagonalSum += arr[i][n - 1 - i];
  }

  const absoluteDifference = Math.abs(primaryDiagonalSum - secondaryDiagonalSum);

  return absoluteDifference;
}

module.exports = diagonalDifference;
