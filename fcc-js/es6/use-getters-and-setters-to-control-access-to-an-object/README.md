# Use getters and setters to Control Access to an Object

You can obtain values from an object and set the value of a property within an object.

These are classically called getters and setters.

Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.

```js
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
```

The console would display the strings `anonymous` and `newAuthor`.

Notice the syntax used to invoke the getter and setter. They do not even look like functions. Getters and setters are important because they hide internal implementation details.

Note: It is convention to precede the name of a private variable with an underscore (`_`). However, the practice itself does not make a variable private.

---

Use the `class` keyword to create a `Thermostat` class. The constructor accepts a Fahrenheit temperature.

In the class, create a `getter` to obtain the temperature in Celsius and a `setter` to set the temperature in Celsius.

Remember that `C = 5/9 * (F - 32)` and `F = C * 9.0 / 5 + 3`2, where `F` is the value of temperature in Fahrenheit, and `C` is the value of the same temperature in Celsius.

Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.

This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.

In other words, you are abstracting implementation details from the user.

---

## Tests

- `Thermostat` should be a `class` with a defined `constructor` method.
- The `class` keyword should be used.
- `Thermostat` should be able to be instantiated.
- When instantiated with a Fahrenheit value, `Thermostat` should set the correct `temperature`.
- A `getter` should be defined.
- A `setter` should be defined.
- Calling the `setter` with a Celsius value should set the `temperature`.
