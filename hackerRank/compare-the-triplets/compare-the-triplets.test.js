const compareTheTriplets = require('./compare-the-triplets');

describe('Compare the triplets of [5, 6, 7] and [3, 6, 10] to return [1, 1]', () => {
  test('object assignment', () => {
    const data = compareTheTriplets([5, 6, 7], [3, 6, 10]);
    expect(data).toEqual([1, 1]);
  });
});

describe('Compare the triplets of [1, 2, 3] and [1, 2, 3] to return [0, 0]', () => {
  test('object assignment', () => {
    const data = compareTheTriplets([1, 2, 3], [1, 2, 3]);
    expect(data).toEqual([0, 0]);
  });
});

describe('Compare the triplets of [6, 8, 12] and [7, 9, 15] to return [0, 3]', () => {
  test('object assignment', () => {
    const data = compareTheTriplets([6, 8, 12], [7, 9, 15]);
    expect(data).toEqual([0, 3]);
  });
});

describe('Compare the triplets of [10, 15, 20] and [5, 6, 7] to return [3, 0]', () => {
  test('object assignment', () => {
    const data = compareTheTriplets([10, 15, 20], [5, 6, 7]);
    expect(data).toEqual([3, 0]);
  });
});

describe('Compare the triplets of [10,12, 50] and [20 ,20, 10] to return [1 ,2]', () => {
  test('object assignment', () => {
    const data = compareTheTriplets([10, 12, 50], [20, 20, 10]);
    expect(data).toEqual([1, 2]);
  });
});

describe('Compare the triplets of [10 ,20 ,30] and [5 ,5, 50] to return [2 ,1]', () => {
  test('object assignment', () => {
    const data = compareTheTriplets([10, 20, 30], [5, 5, 50]);
    expect(data).toEqual([2, 1]);
  });
});

describe('Compare the triplets of [20, 20, 30] and [20 ,20 ,50] to return [0 ,1]', () => {
  test('object assignment', () => {
    const data = compareTheTriplets([20, 20, 30], [20, 20, 50]);
    expect(data).toEqual([0, 1]);
  });
});

describe('Compare the triplets of ([17, 28, 30] and [99, 16, 8]) to return [2, 1]', () => {
  test('object assignment', () => {
    const data = compareTheTriplets([17, 28, 30], [99, 16, 8]);
    expect(data).toEqual([2, 1]);
  });
});
