const plusMinus = require('./plus-minus');

test('Total ratio of -4 3 -9 0 4 1 to equal 0.500000, 0.333333, 0.166667', () => {
  expect(plusMinus(-4, 3, -9, 0, 4, 1)).toBe(0.500000, 0.333333, 0.166667);
});
