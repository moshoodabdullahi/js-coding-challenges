const makeServerRequest = new Promise((resolve, reject) => {
  const responseFromServer = false;

  if (responseFromServer) {
    resolve('We got the data');
  } else {
    reject.error('Data not received');
  }
});

makeServerRequest.then((result) => {
  console.log(result);
});

makeServerRequest.catch((error) => {
  console.log(error);
});
