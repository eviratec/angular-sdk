'use strict';

describe('A RemoteResource', function () {

  var RemoteResource;

  beforeEach(function () {

    module('eviratecNgSdk');

    inject(['RemoteResource', function (_RemoteResource_) {

      RemoteResource = _RemoteResource_;

    }]);

  });

  describe('remoteResource.download()', function () {

    var remoteResource;
    var returnValue;

    beforeEach(function () {
      remoteResource = new RemoteResource();
      returnValue = remoteResource.download();
    });

    it('should return a promise', function () {
      expect(returnValue+'').toBe('[object Promise]');
    });

  });

});
