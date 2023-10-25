# Create a Module Script

JavaScript started with a small role to play on an otherwise mostly `HTML` web. Today, it’s huge, and some websites are built almost entirely with JavaScript. In order to make JavaScript more modular, clean, and maintainable; ES6 introduced a way to easily share code among JavaScript files. This involve exporting parts of a file for use in one or more other files, and importing the part you need, where you need them. In order to take advantage of this functionality, you need to create a script in your HTML document with a `type` of `module`. Here's an example:

```html
<script type="module" src="filename.js"></script>
```

---

A script that uses this `module` type can now use the `import` and `export` feature you will learn about in the upcoming challenges.

Add a script to the html document of type `module` and give it the source file of `index.js`

---

## Tests

- You should create a `script` tag.
- Your `script` tag should have the `type` attribute with a value of `module`.
- Your `script` tag should have a `src` of `index.js`.
