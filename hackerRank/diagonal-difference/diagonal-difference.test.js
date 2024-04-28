const diagonalDifference = require('./diagonal-difference');

describe('Find the diagonalDifference of [11, 2, 4],[4, 5, 6],[10, 8, -12] to return 15', () => {
  test('object assignment', () => {
    const data = [
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ];
    expect(diagonalDifference(data)).toBe(15);
  });
});

describe('Find the diagonalDifference of [-1, 1, -7, -8],[-10, -8, -5, -2],[0, 9, 7, -1],[4, 4, -2, 1] to return 1', () => {
  test('object assignment', () => {
    const data = [
      [-1, 1, -7, -8],
      [-10, -8, -5, -2],
      [0, 9, 7, -1],
      [4, 4, -2, 1],
    ];
    expect(diagonalDifference(data)).toBe(1);
  });
});

describe('Find the diagonalDifference of [6, 6, 7, -10, 9, -3, 8, 9, -1],[9, 7, -10, 6, 4, 1, 6, 1, 1],[-1, -2, 4, -6, 1, -4, -6, 3, 9],[-8, 7, 6, -1, -6, -6, 6, -7, 2],[-10, -4, 9, 1, -7, 8, -5, 3, -5],[-8, -3, -4, 2, -3, 7, -5, 1, -5],[-2, -7, -4, 8, 3, -1, 8, 2, 3],[-3, 4, 6, -7, -7, -8, -3, 9, -6],[-2, 0, 5, 4, 4, 4, -3, 3, 0] to return 52', () => {
  test('object assignment', () => {
    const data = [
      [6, 6, 7, -10, 9, -3, 8, 9, -1],
      [9, 7, -10, 6, 4, 1, 6, 1, 1],
      [-1, -2, 4, -6, 1, -4, -6, 3, 9],
      [-8, 7, 6, -1, -6, -6, 6, -7, 2],
      [-10, -4, 9, 1, -7, 8, -5, 3, -5],
      [-8, -3, -4, 2, -3, 7, -5, 1, -5],
      [-2, -7, -4, 8, 3, -1, 8, 2, 3],
      [-3, 4, 6, -7, -7, -8, -3, 9, -6],
      [-2, 0, 5, 4, 4, 4, -3, 3, 0],
    ];
    expect(diagonalDifference(data)).toBe(52);
  });
});

describe('Find the diagonalDifference of [-10, 3, 0, 5, -4],[2, -1, 0, 2, -8],[9, -2, -5, 6, 0],[9, -7, 4, 8, -2],[3, 7, 8, -5, 0] to return 3', () => {
  test('object assignment', () => {
    const data = [
      [-10, 3, 0, 5, -4],
      [2, -1, 0, 2, -8],
      [9, -2, -5, 6, 0],
      [9, -7, 4, 8, -2],
      [3, 7, 8, -5, 0],
    ];
    expect(diagonalDifference(data)).toBe(3);
  });
});

describe('Find the diagonalDifference of [6, 8,],[-6, 9] to return 13', () => {
  test('object assignment', () => {
    const data = [
      [6, 8],
      [-6, 9],
    ];
    expect(diagonalDifference(data)).toBe(13);
  });
});

describe('Find the diagonalDifference of  [1, 1, 1],[1, 1, 1],[1, 1, 1] to return 0', () => {
  test('object assignment', () => {
    const data = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ];
    expect(diagonalDifference(data)).toBe(0);
  });
});
