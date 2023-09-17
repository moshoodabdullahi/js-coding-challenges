# Use Destructuring Assignment to Pass an Object as a Function's Parameters

In some cases, you can destructure the object in a function argument itself.

Consider the code below:

```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
};
```

This effectively destructures the object sent into the function. This can also be done in-place:

```js
const profileUpdate = ({ name, age, nationality, location }) => {};
```

When `profileData` is passed to the above function, the values are destructured from the function parameter for use within the function.

---

Use destructuring assignment within the argument to the function `half` to send only `max` and `min` inside the function.

---

## Tests

- `stats` should be an `object`.
- `half(stats)` should be `28.015`
- Destructuring should be used.
- Destructured parameter should be used.
