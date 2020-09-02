# JS-error-trace-cleaner

JS-error-trace-cleaner is a js error cleanup utility.


# Example
Before cleanup
  - Error: test
    at Object.<anonymous> (C:\Users\test\Desktop\test\JS-error-trace-cleaner\build\src\index.js:15:11)
    at Module._compile (internal/modules/cjs/loader.js:1137:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1157:10)
    at Module.load (internal/modules/cjs/loader.js:985:32)
    at Function.Module._load (internal/modules/cjs/loader.js:878:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47

After cleanup:
  - test
Object.<anonymous> (C:\Users\test\Desktop\test\JS-error-trace-cleaner\build\src\index.js:15:11)
Module._compile (internal/modules/cjs/loader.js:11

### Import
```js
const clean = require("js-error-trace-cleaner");
```
or
```js
import clean from "js-error-trace-cleaner";
```
### Example Usage
```js
clean(new Error())
```

## Contributing

Read our [contributing guide](/CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to js-error-trace-cleaner.

## Changelog

Recently Updated?
Please read the [changelog](/CHANGELOG.md).