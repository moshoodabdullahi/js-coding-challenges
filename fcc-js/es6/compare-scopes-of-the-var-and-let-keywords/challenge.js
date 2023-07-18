function checkScope() {
  const i = 'function scope';
  if (true) {
    // eslint-disable-next-line no-shadow
    const i = 'block scope';
    // eslint-disable-next-line no-console
    console.log('function scope i is: ', i);
  }
  // eslint-disable-next-line no-console
  console.log('block scope i is: ', i);
  return i;
}
checkScope();
