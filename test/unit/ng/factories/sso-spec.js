'use strict';

describe('$sso', function () {

  var $sso;
  var $cookies;

  describe('$ssoProvider', function () {

    var $ssoProvider;

    beforeEach(function () {

      angular
        .module('eviratecNgSdk.test', [])
        .config(['$ssoProvider', function (_$ssoProvider_) {

          $ssoProvider = _$ssoProvider_;

        }]);

      module('eviratecNgSdk', 'eviratecNgSdk.test');

      inject(['$cookies', function (_$cookies_) {
        $cookies = _$cookies_;
      }]);

    });

    describe('$ssoProvider.ssoHost()', function () {

      it('should return the default SSO host', function () {
        expect($ssoProvider.ssoHost()).toBe('https://login.eviratec.co');
      });

    });

  });

  describe('$sso', function () {

    beforeEach(function () {

      module('eviratecNgSdk');

      inject(['$sso', function (_$sso_) {
        $sso = _$sso_;
      }]);

      inject(['$cookies', function (_$cookies_) {
        $cookies = _$cookies_;
      }]);

    });

  });

});
