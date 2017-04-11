'use strict';

describe('(E2E) Remote Resources', function () {

  var $httpBackend;
  var requestHandler;


  var RemoteResource;
  var CachedQuery;
  var CachedEntity;

  var remoteResource;
  var cachedQuery;
  var cachedEntity;

  var hndl_downloaded;
  var hndl_download_error;

  beforeEach(function () {

    hndl_downloaded = jasmine.createSpy('hndl_downloaded');
    hndl_download_error = jasmine.createSpy('hndl_download_error');

    angular
      .module('eviratecNgSdk.test', [])
      .config(['$evSdkConfigProvider', function ($evSdkConfigProvider) {

        $evSdkConfigProvider
          .value('queryCacheHost', 'https://cache.eviratec.software');

      }]);

    module('eviratecNgSdk', 'eviratecNgSdk.test');

    inject(['RemoteResource', 'CachedQuery', 'CachedEntity', '$injector',
      function (_RemoteResource_, _CachedQuery_, _CachedEntity_, $injector) {

        $httpBackend = $injector.get('$httpBackend');

        RemoteResource = _RemoteResource_;
        CachedQuery = _CachedQuery_;
        CachedEntity = _CachedEntity_;

        remoteResource = new RemoteResource();
        cachedQuery = new CachedQuery();
        cachedEntity = new CachedEntity('session', '0');

        cachedEntity.on('downloaded', hndl_downloaded);
        cachedEntity.on('download_error', hndl_download_error);

      }
    ]);

  });

  describe('when fetching a Cached Entity Remote Resource', function () {

    describe('for a new CachedEntity(\'session\', \'0\')', function () {

      it('should be an instance of RemoteResource', function () {
        expect(cachedEntity instanceof RemoteResource).toBe(true);
      });

      describe('properties', function () {

        it('url should be "https://cache.eviratec.software/session/0"', function () {
          expect(cachedEntity.url)
            .toBe('https://cache.eviratec.software/session/0');
        });

        it('isDownloaded should be false', function () {
          expect(cachedEntity.isDownloaded).toBe(false);
        });

        it('data should be an object', function () {
          expect(cachedEntity.data).toEqual(jasmine.any(Object));
        });

      });

      describe('when invoking the download() method', function () {

        beforeEach(function () {
          
          $httpBackend
            .when('GET', 'https://cache.eviratec.software/session/0')
            .respond(200, '{}');
          
          $httpBackend.expectGET('https://cache.eviratec.software/session/0');

        })

        afterEach(function () {
          
          $httpBackend.flush();
          
          $httpBackend.verifyNoOutstandingExpectation();
          $httpBackend.verifyNoOutstandingRequest();
          
        });

        it('should return something with a then() method', function () {
          expect(typeof cachedEntity.download().then).toBe('function');
        });

        it('should return something with a catch() method', function () {
          expect(typeof cachedEntity.download().catch).toBe('function');
        });

        it('should emit "downloaded" event on success', function (done) {

          cachedEntity
            .download()
            .then(function () {
              expect(hndl_downloaded).toHaveBeenCalled();
              done();
            })
            .catch(function () {
              expect(hndl_downloaded).toHaveBeenCalled();
              done();
            });

        });

      });

    });

  });

  describe('cachedQuery', function () {

    it('Should be an instance of RemoteResource', function () {
      expect(cachedQuery instanceof RemoteResource).toBe(true);
    });

  });

});
