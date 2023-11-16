const solveMeFirst = require('./solve-me-first');

test('adds 1 + 2 to equal 3', () => {
  expect(solveMeFirst(1, 2, '+')).toBe(3);
});
