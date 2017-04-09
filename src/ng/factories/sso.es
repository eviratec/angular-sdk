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

app.provider('$sso', $ssoProvider);

$ssoProvider.$inject = ['D_SSO_HOST'];
function $ssoProvider (  D_SSO_HOST) {

  let config = {
    ssoHost: D_SSO_HOST,
  };

  function getSsoHost () {
    return config.ssoHost;
  }

  function setSsoHost (newValue) {
    return config.ssoHost = newValue;
  }

  this.ssoHost = function (newValue) {
    
    if (undefined === newValue) {
      return getSsoHost();
    }

    setSsoHost(newValue);

    return this;

  };

  this.$get = ['Sso', function (Sso) {
    return new Sso(config.ssoHost);
  }];

}
