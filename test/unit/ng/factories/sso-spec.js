'use strict';

describe('Single Sign-On', function () {

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

    describe('$ssoProvider.ssoHost(newValue)', function () {

      var otherHost;

      beforeEach(function () {
        otherHost = 'https://login.eviratec.com.au';
        $ssoProvider.ssoHost(otherHost);
      });

      it('should set the SSO host', function () {
        expect($ssoProvider.ssoHost()).toBe(otherHost);
      });

    });

  });

});
