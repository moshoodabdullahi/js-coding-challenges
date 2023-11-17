const simpleArraySum = require('./simple-array-sum');
const testCaseFileOne = require('./testCaseFileOne');

test('adds 1 + 2 + 3 + 4 + 10 + 11  to equal 31', () => {
  expect(simpleArraySum([1, 2, 3, 4, 10, 11])).toBe(31);
});

test('sums a very large array of integers', () => {
  expect(simpleArraySum(testCaseFileOne)).toBe(495619);
});
