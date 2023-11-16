const simpleArraySum = require('./simple-array-sum');

test('adds 1 + 2 + 3 + 4 + 10 + 11  to equal 31', () => {
  expect(simpleArraySum(1, 2, 3, 4, 10, 11)).toBe(31);
});

// test('adds 338 + 65 + 713 + 595 + 428 + 610 + 728 + 573 + 871 + 868  to equal 5789', () => {
//   expect(simpleArraySum(338, 65, 713, 595, 428, 610, 728, 573, 871, 868)).toBe(5789);
// });
