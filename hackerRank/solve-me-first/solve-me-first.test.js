const solveMeFirst = require('./solve-me-first');

test('adds 1 + 2 to equal 3', () => {
  expect(solveMeFirst(1, 2)).toBe(3);
});

test('adds 1000 + 100 to equal 1100', () => {
  expect(solveMeFirst(1000, 100)).toBe(1100);
});
