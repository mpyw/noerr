# noerr

Safe property reference chaining without errors.  
Only `TypeError` can be suppressed.

```js
const a = { b: 1 };

console.log(noerr(() => a.b)); // 1
console.log(noerr(() => a.b.c)); // undefined
console.log(noerr(() => a.b.c.d)); // undefined
console.log(noerr(() => a.b.c())); // undefined

noerr(() => x); // ReferenceError: x is not defined
```

## Preparation

### Node ESModules & NPM

```bash
npm install noerr
```

```js
import noerr from 'noerr';
```

### Node CommonJS & NPM

```bash
npm install noerr
```

```js
const { default: noerr } = require('noerr');
```

### Browser & CDN

```html
<script src="https://unpkg.com/noerr@latest"></script>
```

```html
<script>
const noerr = NoErr.default;
</script>
```
