# noerr

Safe property reference chaining without errors.  
Only `TypeError` can be suppressed.

## Usage

```js
import noerr from 'noerr';

const a = {b: 1};
console.log(noerr(() => a.b)); // 1
console.log(noerr(() => a.b.c)); // undefined
console.log(noerr(() => a.b.c.d)); // undefined
console.log(noerr(() => a.b.c())); // undefined

noerr(() => x); // ReferenceError: x is not defined
```
