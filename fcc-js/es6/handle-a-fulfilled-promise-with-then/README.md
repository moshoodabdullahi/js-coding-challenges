# Handle a Fulfilled Promise with then

Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the `then` method. The `then` method is executed immediately after your promise is fulfilled with `resolve`. Here’s an example:

```js
myPromise.then((result) => {});
```

`result` comes from the argument given to the `resolve` method.

---

Add the `then` method to your promise. Use `result` as the parameter of its callback function and log `result` to the console.

---

## Tests

- You should call the `then` method on the promise.
- Your `then` method should have a callback function with `result` as its parameter.
- You should log `result` to the console.
