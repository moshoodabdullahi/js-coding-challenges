const aVeryBigSum = require('./a-very-big-sum');

describe('Add a Very Big Sum of [1000000001, 1000000002, 1000000003, 1000000004, 1000000005] to return (5000000015)', () => {
  test('object assignment', () => {
    const data = aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
    expect(data).toBe(5000000015);
  });
});

describe('Add a Very Big Sum of [1001458909, 1004570889, 1007019111, 1003302837, 1002514638, 1006431461, 1002575010, 1007514041, 1007548981, 1004402249] to return (10047338126)', () => {
  test('object assignment', () => {
    const data = aVeryBigSum([
      1001458909, 1004570889, 1007019111, 1003302837, 1002514638, 1006431461, 1002575010,
      1007514041, 1007548981, 1004402249,
    ]);
    expect(data).toBe(10047338126);
  });
});
