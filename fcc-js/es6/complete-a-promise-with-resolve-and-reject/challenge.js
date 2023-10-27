const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer;

  if (responseFromServer) {
    resolve('We got the data');
  } else {
    reject.error('Data not received');
  }
  console.log(makeServerRequest);
});
