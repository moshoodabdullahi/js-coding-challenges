# Match Anything with Wildcard Period

Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: `.`

The wildcard character `.` will match any one character. The wildcard is also called `dot` and `period`. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match `hug`, `huh`, `hut`, and `hum`, you can use the regex `/hu./` to match all four words.

```js
let humStr = "I'll hum a song";
let hugStr = 'Bear hug';
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
```

Both of these `test` calls would return `true`.

---

Complete the regex `unRegex` so that it matches the strings `run`, `sun`, `fun`, `pun`, `nun`, and `bun`. Your regex should use the wildcard character.

---

## Tests

- You should use the `.test()` method.
- You should use the wildcard character in your regex `unRegex`
- Your regex `unRegex` should match `run` in the string `Let us go on a run`.
- Your regex `unRegex` should match `sun` in the string `The sun is out today`.
- Your regex `unRegex` should match `fun` in the string `Coding is a lot of fun`.
- Your regex `unRegex` should match `pun` in the string `Seven days without a pun makes one weak`.
- Your regex `unRegex` should match `nun` in the string `One takes a vow to be a nun`.
- Your regex `unRegex` should match `bun` in the string `She got fired from the hot dog stand for putting her hair in a bun`.
- Your regex `unRegex` should not match the string `There is a bug in my code`.
- Your regex `unRegex` should not match the string `Catch me if you can`.
