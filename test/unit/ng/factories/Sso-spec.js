'use strict';

describe('A SingleSignOn', function () {

  var SingleSignOn;
  var lastCookieValue;
  var lastSessionId;

  beforeEach(function () {

    module('eviratecNgSdk');

    inject(['SingleSignOn', function (_SingleSignOn_) {

      SingleSignOn = _SingleSignOn_;

    }]);

  });

  describe('new SingleSignOn(host)', function () {

    it('should throw an error if host is NOT provided as first argument', function () {
      expect(function () {
        new SingleSignOn('');
      }).toThrow(jasmine.any(Error));
    });

    it('should NOT throw an error if host is provided as first argument', function () {
      expect(function () {
        new SingleSignOn('https://login.eviratec.co.test');
      }).not.toThrow(jasmine.any(Error));
    });

    it('should set first arg provided to constructor as the value for "ssoHost" property', function () {
      var singleSignOn = new SingleSignOn('https://login.eviratec.co.test');
      expect(singleSignOn.remoteHost).toBe('https://login.eviratec.co.test');
    });

  });

  describe('singleSignOn.isLoggedIn', function () {

    it('should be false ', function () {
      expect(function () {
        new SingleSignOn('');
      }).toThrow(jasmine.any(Error));
    });

    it('should NOT throw an error if host is provided as first argument', function () {
      expect(function () {
        new SingleSignOn('https://login.eviratec.co');
      }).not.toThrow(jasmine.any(Error));
    });

  });

});
