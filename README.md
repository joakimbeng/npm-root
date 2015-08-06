# npm-root

[![NPM version][npm-image]][npm-url]

> Get the node modules directory, a.k.a. npm root. Global or local.

## Installation

Install `npm-root` using [npm](https://www.npmjs.com/):

```bash
npm install --save npm-root
```

## Usage

### Module usage

```javascript
var npmRoot = require('npm-root');

// Get the local node_modules path:
npmRoot(function (err, localPath) {
  // ...
});

// Get the local node_modules path for another directory:
npmRoot({cwd: '/path/to/other/folder'}, function (err, localPath) {
  // ...
});

// Get the global node_modules path:
npmRoot({global: true}, function (err, globalPath) {
  // ...
});
```

## API

### `npmRoot(opts, cb)`

| Name | Type | Description |
|------|------|-------------|
| opts | `Object` | Options (optional) |
| cb | `Function` | Callback function |

#### opts.global

Set this to get the global node_modules path instead of the local.

#### opts.cwd

Change current working directory, affects only the local node_modules path.


## License

MIT

[npm-url]: https://npmjs.org/package/npm-root
[npm-image]: https://badge.fury.io/js/npm-root.svg

