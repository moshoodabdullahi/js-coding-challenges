function checkScope() {
  const i = 'function scope';
  if (true) {
    // eslint-disable-next-line no-shadow
    const i = 'block scope';
    console.log('function scope i is: ', i);
  }
  console.log('block scope i is: ', i);
  return i;
}
checkScope();
