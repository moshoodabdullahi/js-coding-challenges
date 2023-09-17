# Use Destructuring Assignment to Assign Variables from Nested Objects

You can use the same principles from the previous two lessons to destructure values from nested objects.

Using an object similar to previous examples:

```js
const user = {
  johnDoe: {
    age: 34,
    email: 'johnDoe@freeCodeCamp.com',
  },
};
```

Here's how to extract the values of object properties and assign them to variables with the same name:

```js
const {
  johnDoe: { age, email },
} = user;
```

And here's how you can assign an object properties' values to variables with different names:

```js
const {
  johnDoe: { age: userAge, email: userEmail },
} = user;
```

---

Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables `lowToday` and `highToday` the values of `today.low` and `today.high` from the `LOCAL_FORECAST` object.

---

## Tests

- You should remove the ES5 assignment syntax.
- You should use destructuring to create the `lowToday` variable.
- You should use destructuring to create the `highToday` variable.
- `lowToday` should be equal to `64` and `highToday` should be equal to `77`.
