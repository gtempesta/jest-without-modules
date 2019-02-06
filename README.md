# Using Jest without JavaScript modules

Needing to test a legacy application in which I couldn't modify the JavaScript files, I have found a way to test the scripts by attaching them to the [jsdom](https://github.com/jsdom/jsdom) installation.

## Getting Started

In order to make this example work you just need to install Jest by typing

```
npm install
```
in your command line from the root of the project.

To run the tests you have to type

```
npm run test
```

and

```
npm run test_watch
```

if you want to keep watching your folders for changes.

### Explanation

If you want to test a file that is not a module, you need to manually create a script object containing the code and to attach it to the window. In order to make this process easier I have created the `loadExternalScripts` function which is defined and exported in the `loadExternalScripts.js` file.

You can import it like this:
```javascript
const loadExternalScripts = require('./loadExternalScripts');
```

In order to use this function you neeed to extract the content of a script using `node` and the `fs` library, like this:

```javascript
const srcFile = fs.readFileSync("lib.js", { encoding: "utf-8" });
```
Inside your test file you can load those scripts in the `beforeAll` function: 

```javascript
beforeAll(() => {
    loadExternalScripts([jQueryFile, srcFile]);
});
```
