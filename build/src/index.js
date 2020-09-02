"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function clean(error) {
    const msg = error.message;
    const err = msg.replace(/^Error: /, '');
    const stack = error
        .stack.replace(/^Error: /, '')
        .replace(`${err}\n`, '')
        .replace(/^ +/gm, '')
        .replace(/^at /gm, '')
        .replace(/(?: \(|@)http.+\/([^/)]+)\)?(?:\n|$)/gm, '@$1\n')
        .replace(/ *\(eval code(:\d+:\d+)\)(?:\n|$)/gm, '@???$1\n');
    return `${err}\n${stack}`.substr(0, 150);
}
const x = new Error('test');
console.log(x);
console.log(clean(x));
exports.default = clean;
//# sourceMappingURL=index.js.map