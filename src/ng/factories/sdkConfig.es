/** 
 * Copyright (c) 2017 Callan Peter Milne
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above 
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

app.provider('$evSdkConfig', $evSdkConfigProvider);

$evSdkConfigProvider.$inject = ['EV_SDK_DEFAULTS'];
function $evSdkConfigProvider (  EV_SDK_DEFAULTS) {

  let config = {
    ssoHost: EV_SDK_DEFAULTS.SSO_HOST,
    queryCacheHost: EV_SDK_DEFAULTS.QUERY_CACHE_HOST,
  };

  function getValue (varName) {
    return config[varName];
  }

  function setValue (varName, newValue) {
    return config[varName] = newValue;
  }

  this.value = function (varName, newValue) {
    
    if (undefined === newValue) {
      return getValue(varName);
    }

    setValue(varName, newValue);

    return this;

  };

  this.$get = function () {
    return Object.assign({}, config);
  };

}
