'use strict';

describe('SDK Config', function () {

  var $cookies;
  
  describe('$evSdkConfigProvider', function () {

    var $evSdkConfigProvider;

    beforeEach(function () {

      angular
        .module('eviratecNgSdk.test', [])
        .config(['$evSdkConfigProvider', function (_$evSdkConfigProvider_) {

          $evSdkConfigProvider = _$evSdkConfigProvider_;

        }]);

      module('eviratecNgSdk', 'eviratecNgSdk.test');

      inject(['$cookies', function (_$cookies_) {
        $cookies = _$cookies_;
      }]);

    });

    describe('$evSdkConfigProvider.value(\'test\')', function () {

      it('should return undefined', function () {
        expect($evSdkConfigProvider.value('test')).toBe(undefined);
      });

    });

    describe('$evSdkConfigProvider.value(\'test\', \'foo\')', function () {

      beforeEach(function () {
        $evSdkConfigProvider.value('test', 'foo');
      });

      it('should set the value for sdk config var [test]', function () {
        expect($evSdkConfigProvider.value('test')).toBe('foo');
      });

    });

  });

});
