# Eviratec Angular SDK

*Eviratec Software Development Kit for AngularJS*

eviratec-angular-sdk@v1.0.0-alpha.1
Built on 2017-04-10T23:49:33Z

[![Build Status](https://travis-ci.org/eviratec/angular-sdk.svg?branch=master)](https://travis-ci.org/eviratec/angular-sdk)
[![Dependency Status](https://david-dm.org/eviratec/angular-sdk/status.svg)](https://david-dm.org/eviratec/angular-sdk)
[![devDependency Status](https://david-dm.org/eviratec/angular-sdk/dev-status.svg)](https://david-dm.org/eviratec/angular-sdk#info=devDependencies)

## Install

1. Install npm module: `$ npm i --save eviratec/angular-sdk`
2. Include/require the release source `node_modules/eviratec-angular-sdk/eviratec-angular-sdk.js` (full) | `node_modules/eviratec-angular-sdk/eviratec-angular-sdk.min.js` (minified)
3. Add to your AngularJS module's depencency array: 
  ```javascript
  angular.module('myNgApp', [
    'evNgSdk',
  ]);
  ```

## Run tests

1. `$ mkdir eviratec-angular-sdk && cd "$_"`
2. `$ git checkout git@github.com:/eviratec/angular-sdk.git .`
3. `$ npm install`
4. `$ npm test`

## License

Copyright (c) 2017 Callan Peter Milne

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
