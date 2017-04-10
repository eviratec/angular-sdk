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

app.factory('RemoteResource', RemoteResourceFactory);

RemoteResourceFactory.$inject = ['EventEmitter', '$http'];
function RemoteResourceFactory (  EventEmitter,   $http) {

  class RemoteResource extends EventEmitter {

    constructor (uri) {

      super();

      this.isDownloaded = false;
      this.uri = uri || 'https://localhost/resource';
      this.data = {};

      this.once('downloaded', () => {
        this.isDownloaded = true;
      });

    }

    download (refresh = false) {
      return new Promise((resolve, reject) => {

        let isDownloaded = true === this.isDownloaded;
        if (false === refresh && isDownloaded) {
          return resolve(this);
        }

        this.fetch()
          .then(() => {
            this.emit('downloaded', this.data, res);
            resolve(this);
          })
          .catch(err => {
            this.emit('download_error', err);
            reject(err);
          });

      });
    }

    fetch (resolve, reject) {
      return new Promise((resolve, reject) => {

        httpGet(this)
          .then(res => {
            Object.assign(this.data, res.data || {});
            resolve(this);
          }, err => {
            reject(err);
          });

      });
    }

  }

  return RemoteResource;

  function httpGet (remoteResource) {
    return $http({
      method: 'GET',
      url: remoteResource.uri,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

}
