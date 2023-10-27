const makeServerRequest = new Promise((resolve, reject) => {
  const responseFromServer = true;

  if (responseFromServer) {
    resolve('We got the data');
  } else {
    reject.error('Data not received');
  }
});

makeServerRequest.then((result) => {
  console.log(result);
});
