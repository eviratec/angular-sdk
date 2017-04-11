'use strict';

describe('(E2E) Remote Resources', function () {

  var RemoteResource;
  var CachedQuery;
  var CachedEntity;

  var remoteResource;
  var cachedQuery;
  var cachedEntity;

  beforeEach(function () {

    angular
      .module('eviratecNgSdk.test', [])
      .config(['$evSdkConfigProvider', function ($evSdkConfigProvider) {

        $evSdkConfigProvider
          .value('queryCacheHost', 'https://cache.eviratec.software');

      }]);

    module('eviratecNgSdk', 'eviratecNgSdk.test');

    inject(['RemoteResource', 'CachedQuery', 'CachedEntity',
      function (_RemoteResource_, _CachedQuery_, _CachedEntity_) {

        RemoteResource = _RemoteResource_;
        CachedQuery = _CachedQuery_;
        CachedEntity = _CachedEntity_;

        remoteResource = new RemoteResource();
        cachedQuery = new CachedQuery();
        cachedEntity = new CachedEntity('session', '0');

      }
    ]);

  });

  describe('fetching a Cached Entity Remote Resource', function () {

    describe('a new Cached Entity\'s properties', function () {

      it('should intially have a valid url', function () {
        expect(cachedEntity.url)
          .toBe('https://cache.eviratec.software/session/0');
      });

    });

  });

  describe('cachedQuery', function () {

    it('Should be an instance of RemoteResource', function () {
      expect(cachedQuery instanceof RemoteResource).toBe(true);
    });

  });

  describe('cachedEntity', function () {

    it('Should be an instance of RemoteResource', function () {
      expect(cachedEntity instanceof RemoteResource).toBe(true);
    });

  });

});
