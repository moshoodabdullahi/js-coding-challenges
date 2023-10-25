# Write Concise Declarative Functions with ES6

When defining functions within objects in ES5, we have to use the keyword `function` as follows:

```js
const person = {
  name: 'Taylor',
  sayHello: function () {
    return `Hello! My name is ${this.name}.`;
  },
};
```

With ES6, you can remove the `function` keyword and colon altogether when defining functions in objects. Here's an example of this syntax:

```js
const person = {
  name: 'Taylor',
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  },
};
```

---

Refactor the function `setGear` inside the object `bicycle` to use the shorthand syntax described above.

---

## Tests

- Traditional function expression should not be used.
- `setGear` should be a declarative function.
- `bicycle.setGear(48)` should change the `gear` value to 48.
