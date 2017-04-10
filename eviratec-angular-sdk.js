/**
 * eviratec-angular-sdk@v1.0.0-alpha.1
 * Built on 2017-04-10T06:10:22Z
 *
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

(function(){"use strict";
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleName = 'eviratecNgSdk';
var moduleDeps = ['ngCookies'];

var app = angular.module(moduleName, moduleDeps);

/* Default SSO Host */
app.constant('D_SSO_HOST', 'https://login.eviratec.co');

app.factory('CachedEntity', CachedEntityFactory);

CachedEntityFactory.$inject = ['RemoteResource'];
function CachedEntityFactory(RemoteResource) {
  var CachedEntity = function (_RemoteResource) {
    _inherits(CachedEntity, _RemoteResource);

    function CachedEntity(uri) {
      _classCallCheck(this, CachedEntity);

      return _possibleConstructorReturn(this, (CachedEntity.__proto__ || Object.getPrototypeOf(CachedEntity)).call(this, uri));
    }

    return CachedEntity;
  }(RemoteResource);

  return CachedEntity;
}

app.factory('CachedQuery', CachedQueryFactory);

CachedQueryFactory.$inject = ['RemoteResource'];
function CachedQueryFactory(RemoteResource) {
  var CachedQuery = function (_RemoteResource2) {
    _inherits(CachedQuery, _RemoteResource2);

    function CachedQuery(uri) {
      _classCallCheck(this, CachedQuery);

      return _possibleConstructorReturn(this, (CachedQuery.__proto__ || Object.getPrototypeOf(CachedQuery)).call(this, uri));
    }

    return CachedQuery;
  }(RemoteResource);

  return CachedQuery;
}

app.factory('EventEmitter', EventEmitterFactory);

EventEmitterFactory.$inject = [];
function EventEmitterFactory() {

  /**
   *  EventEmitter3
   *
   *  EventEmitter3 is a high performance EventEmitter. It has been micro-optimized
   *  for various of code paths making this, one of, if not the fastest EventEmitter
   *  available for Node.js and browsers.
   *
   *  The MIT License (MIT)
   *
   *  Copyright (c) 2014 Arnout Kazemier
   *
   *  Permission is hereby granted, free of charge, to any person obtaining a copy
   *  of this software and associated documentation files (the "Software"), to deal
   *  in the Software without restriction, including without limitation the rights
   *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   *  copies of the Software, and to permit persons to whom the Software is
   *  furnished to do so, subject to the following conditions:
   *
   *  The above copyright notice and this permission notice shall be included in all
   *  copies or substantial portions of the Software.
   *
   *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   *  SOFTWARE.
   */

  var has = Object.prototype.hasOwnProperty;

  //
  // We store our EventEmissionHandler objects in a plain object whose properties are event names.
  // If `Object.create(null)` is not supported we prefix the event names with a
  // `~` to make sure that the built-in object properties are not overridden or
  // used as an attack vector.
  // We also assume that `Object.create(null)` is available when the event name
  // is an ES6 Symbol.
  //
  var prefix = typeof Object.create !== 'function' ? '~' : false;

  /**
   * Representation of a single EventEmitter function.
   *
   * @param {Function} fn Event handler to be called.
   * @param {Mixed} context Context for function execution.
   * @param {Boolean} [once=false] Only emit once
   * @api private
   */

  var EventEmissionHandler = function EventEmissionHandler(fn, context, once) {
    _classCallCheck(this, EventEmissionHandler);

    this.fn = fn;
    this.context = context;
    this.once = once || false;
  };

  /**
   * Minimal EventEmitter interface that is molded against the Node.js
   * EventEmitter interface.
   *
   * @constructor
   * @api public
   */


  var EventEmitter = function () {
    _createClass(EventEmitter, null, [{
      key: 'prefixed',
      get: function get() {
        return prefix;
      }
    }]);

    function EventEmitter() {
      _classCallCheck(this, EventEmitter);

      /**
       * Hold the assigned EventEmitters by name.
       *
       * @type {Object}
       * @private
       */
      this._events = undefined;
    }

    /**
     * Return an array listing the events for which the emitter has registered
     * listeners.
     *
     * @returns {Array}
     * @api public
     */


    _createClass(EventEmitter, [{
      key: 'eventNames',
      value: function eventNames() {
        var events = this._events,
            names = [],
            name;

        if (!events) return names;

        for (name in events) {
          if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
        }

        if (Object.getOwnPropertySymbols) {
          return names.concat(Object.getOwnPropertySymbols(events));
        }

        return names;
      }

      /**
       * Return a list of assigned event listeners.
       *
       * @param {String} event The events that should be listed.
       * @param {Boolean} exists We only need to know if there are listeners.
       * @returns {Array|Boolean}
       * @api public
       */

    }, {
      key: 'listeners',
      value: function listeners(event, exists) {
        var evt = prefix ? prefix + event : event,
            available = this._events && this._events[evt];

        if (exists) return !!available;
        if (!available) return [];
        if (available.fn) return [available.fn];

        for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
          ee[i] = available[i].fn;
        }

        return ee;
      }

      /**
       * Emit an event to all registered event listeners.
       *
       * @param {String} event The name of the event.
       * @returns {Boolean} Indication if we've emitted an event.
       * @api public
       */

    }, {
      key: 'emit',
      value: function emit(event, a1, a2, a3, a4, a5) {
        var evt = prefix ? prefix + event : event;

        if (!this._events || !this._events[evt]) return false;

        var listeners = this._events[evt],
            len = arguments.length,
            args,
            i;

        if ('function' === typeof listeners.fn) {
          if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

          switch (len) {
            case 1:
              return listeners.fn.call(listeners.context), true;
            case 2:
              return listeners.fn.call(listeners.context, a1), true;
            case 3:
              return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
              return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
          }

          for (i = 1, args = new Array(len - 1); i < len; i++) {
            args[i - 1] = arguments[i];
          }

          listeners.fn.apply(listeners.context, args);
        } else {
          var length = listeners.length,
              j;

          for (i = 0; i < length; i++) {
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

            switch (len) {
              case 1:
                listeners[i].fn.call(listeners[i].context);break;
              case 2:
                listeners[i].fn.call(listeners[i].context, a1);break;
              case 3:
                listeners[i].fn.call(listeners[i].context, a1, a2);break;
              default:
                if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }

                listeners[i].fn.apply(listeners[i].context, args);
            }
          }
        }

        return true;
      }

      /**
       * Register a new EventListener for the given event.
       *
       * @param {String} event Name of the event.
       * @param {Function} fn Callback function.
       * @param {Mixed} [context=this] The context of the function.
       * @api public
       */

    }, {
      key: 'on',
      value: function on(event, fn, context) {
        var listener = new EventEmissionHandler(fn, context || this),
            evt = prefix ? prefix + event : event;

        if (!this._events) this._events = prefix ? {} : Object.create(null);
        if (!this._events[evt]) this._events[evt] = listener;else {
          if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];
        }

        return this;
      }

      /**
       * Add an EventListener that's only called once.
       *
       * @param {String} event Name of the event.
       * @param {Function} fn Callback function.
       * @param {Mixed} [context=this] The context of the function.
       * @api public
       */

    }, {
      key: 'once',
      value: function once(event, fn, context) {
        var listener = new EventEmissionHandler(fn, context || this, true),
            evt = prefix ? prefix + event : event;

        if (!this._events) this._events = prefix ? {} : Object.create(null);
        if (!this._events[evt]) this._events[evt] = listener;else {
          if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];
        }

        return this;
      }

      /**
       * Remove event listeners.
       *
       * @param {String} event The event we want to remove.
       * @param {Function} fn The listener that we need to find.
       * @param {Mixed} context Only remove listeners matching this context.
       * @param {Boolean} once Only remove once listeners.
       * @api public
       */

    }, {
      key: 'removeListener',
      value: function removeListener(event, fn, context, once) {
        var evt = prefix ? prefix + event : event;

        if (!this._events || !this._events[evt]) return this;

        var listeners = this._events[evt],
            events = [];

        if (fn) {
          if (listeners.fn) {
            if (listeners.fn !== fn || once && !listeners.once || context && listeners.context !== context) {
              events.push(listeners);
            }
          } else {
            for (var i = 0, length = listeners.length; i < length; i++) {
              if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
                events.push(listeners[i]);
              }
            }
          }
        }

        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) {
          this._events[evt] = events.length === 1 ? events[0] : events;
        } else {
          delete this._events[evt];
        }

        return this;
      }

      /**
       * Remove all listeners or only the listeners for the specified event.
       *
       * @param {String} event The event want to remove all listeners for.
       * @api public
       */

    }, {
      key: 'removeAllListeners',
      value: function removeAllListeners(event) {
        if (!this._events) return this;

        if (event) delete this._events[prefix ? prefix + event : event];else this._events = prefix ? {} : Object.create(null);

        return this;
      }

      //
      // Alias methods names because people roll like that.
      //

    }, {
      key: 'off',
      value: function off() {
        this.removeListener.apply(this, arguments);
      }
    }, {
      key: 'addListener',
      value: function addListener() {
        this.on.apply(this, arguments);
      }

      //
      // This function doesn't apply anymore.
      //

    }, {
      key: 'setMaxListeners',
      value: function setMaxListeners() {
        return this;
      }
    }]);

    return EventEmitter;
  }();

  return EventEmitter;
}

app.factory('RemoteResource', RemoteResourceFactory);

RemoteResourceFactory.$inject = ['EventEmitter', '$http'];
function RemoteResourceFactory(EventEmitter, $http) {
  var RemoteResource = function (_EventEmitter) {
    _inherits(RemoteResource, _EventEmitter);

    function RemoteResource(uri) {
      _classCallCheck(this, RemoteResource);

      var _this3 = _possibleConstructorReturn(this, (RemoteResource.__proto__ || Object.getPrototypeOf(RemoteResource)).call(this));

      _this3.isDownloaded = false;
      _this3.uri = uri || 'https://localhost/resource';
      _this3.data = {};

      _this3.once('downloaded', function () {
        _this3.isDownloaded = true;
      });

      return _this3;
    }

    _createClass(RemoteResource, [{
      key: 'download',
      value: function download() {
        var _this4 = this;

        var refresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        return new Promise(function (resolve, reject) {

          var isDownloaded = true === _this4.isDownloaded;
          if (false === refresh && isDownloaded) {
            return resolve(_this4);
          }

          _this4.fetch().then(function () {
            _this4.emit('downloaded', _this4.data, res);
            resolve(_this4);
          }).catch(function (err) {
            _this4.emit('download_error', err);
            reject(err);
          });
        });
      }
    }, {
      key: 'fetch',
      value: function fetch(resolve, reject) {
        var _this5 = this;

        return new Promise(function (resolve, reject) {

          httpGet(_this5).then(function (res) {
            Object.assign(_this5.data, res.data || {});
            resolve(_this5);
          }, function (err) {
            reject(err);
          });
        });
      }
    }]);

    return RemoteResource;
  }(EventEmitter);

  return RemoteResource;

  function httpGet(remoteResource) {
    return $http({
      method: 'GET',
      url: remoteResource.uri,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

app.factory('$session', sessionFactory);

sessionFactory.$inject = ['$cookies', 'Uuid'];
function sessionFactory($cookies, Uuid) {

  var SESSION_COOKIE = 'EV_SESSION';

  var Session = function () {
    _createClass(Session, [{
      key: 'SESSION_COOKIE',
      get: function get() {
        return SESSION_COOKIE;
      }
    }]);

    function Session(sessionId) {
      _classCallCheck(this, Session);

      setSessionId(this, sessionId);
    }

    _createClass(Session, [{
      key: 'reset',
      value: function reset() {
        removeSessionCookie();
        setSessionId(this, newSessionIdCookieValue());
      }
    }]);

    return Session;
  }();

  return new Session(sessionId());

  function sessionId() {

    if (hasSessionCookie()) {
      return existingSessionIdCookieValue();
    }

    return newSessionIdCookieValue();
  }

  function hasSessionCookie() {
    return !!$cookies.get(SESSION_COOKIE);
  }

  function newSessionIdCookieValue() {
    return Uuid.v4String() + '.' + Uuid.v4String().substr(0, 7);
  }

  function existingSessionIdCookieValue() {
    return $cookies.get(SESSION_COOKIE);
  }

  function removeSessionCookie() {
    return $cookies.remove(SESSION_COOKIE);
  }

  function setSessionId(session, newValue) {

    var sessionId = newValue;

    $cookies.put(SESSION_COOKIE, sessionId);
    session.id = sessionId;
  }
}

app.factory('SingleSignOn', SingleSignOnFactory);

SingleSignOnFactory.$inject = ['$http', '$session'];
function SingleSignOnFactory($http, $session) {

  var SSO_DIALOG_ID = 'eviratecDialog';
  var DIALOG_OPTS = ['width=800', 'height=500', 'resizable=yes', 'scrollbars=yes', 'status=yes'];

  var SingleSignOn = function () {
    function SingleSignOn(host) {
      _classCallCheck(this, SingleSignOn);

      if (!host) {
        throw new Error('Hostname expected as first argument');
      }

      this.remoteHost = host;

      this.d = {
        anonymous: true
      };

      this.session = $session;
    }

    _createClass(SingleSignOn, [{
      key: 'init',
      value: function init() {
        var _this6 = this;

        fetchId(this.remoteHost, this.session.id).then(function (d) {
          Object.assign(_this6.d, d);
        });
      }
    }, {
      key: 'refresh',
      value: function refresh() {
        var _this7 = this;

        return new Promise(function (resolve, reject) {
          fetchId(_this7.remoteHost, _this7.session.id).then(function (d) {
            Object.assign(_this7.d, d);
            resolve();
          });
        });
      }
    }, {
      key: 'login',
      value: function login() {

        if (this.isLoggedIn) {
          return false;
        }

        var dialogUrl = loginDialogUrl(this);
        var options = DIALOG_OPTS.join(',');

        return window.open(dialogUrl, SSO_DIALOG_ID, options);
      }
    }, {
      key: 'logout',
      value: function logout() {

        try {
          ssoLogout(this.remoteHost, this.session.id);
        } catch (err) {
          // supress error
        }

        this.session.reset();

        return this.refresh();
      }
    }, {
      key: 'isLoggedIn',
      get: function get() {
        return false === this.d.anonymous;
      }
    }, {
      key: 'userFullName',
      get: function get() {
        if (!this.isLoggedIn) {
          return '';
        }

        var profile = void 0;

        profile = this.d.login.owner;

        return profile.given_name + ' ' + profile.family_name;
      }
    }]);

    return SingleSignOn;
  }();

  return SingleSignOn;

  function fetchId(ssoHost, session_id) {
    return new Promise(function (resolve, reject) {
      $http.get(ssoHost + '/sso/id?a=' + session_id).then(function (res) {
        resolve(res.data);
      }, function () {
        reject();
      });
    });
  }

  function ssoLogout(ssoHost, session_id) {
    return new Promise(function (resolve, reject) {
      $http.post(ssoHost + '/sso/logout?a=' + session_id).then(function (res) {
        resolve(res.data);
      }, function () {
        reject();
      });
    });
  }

  function loginDialogUrl(sso) {
    return sso.d.loginUrl;
  }
}

app.provider('$sso', $ssoProvider);

$ssoProvider.$inject = ['D_SSO_HOST'];
function $ssoProvider(D_SSO_HOST) {

  var config = {
    ssoHost: D_SSO_HOST
  };

  function getSsoHost() {
    return config.ssoHost;
  }

  function setSsoHost(newValue) {
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
    return new Sso(getSsoHost());
  }];
}

app.factory('uuid', uuidFactory);

uuidFactory.$inject = ['$window'];
function uuidFactory($window) {

  /**
   * angular-uuid created by Ivan Hayes @munkychop
   * MIT License - http://opensource.org/licenses/mit-license.php
   * --------------------------------------------------------------
   * This is an AngularJS wrapper for the original node-uuid library
   * written by Robert Kieffer – https://github.com/broofa/node-uuid
   * MIT License - http://opensource.org/licenses/mit-license.php
   * The wrapped node-uuid library is at version 1.4.7
   */

  // Unique ID creation requires a high quality random # generator.  We feature
  // detect to determine the best RNG source, normalizing to a function that
  // returns 128-bits of randomness, since that's what's usually required
  var _rng, _mathRNG, _whatwgRNG;

  // Allow for MSIE11 msCrypto
  var _crypto = $window.crypto || $window.msCrypto;

  if (!_rng && _crypto && _crypto.getRandomValues) {
    // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
    //
    // Moderately fast, high quality
    try {
      var _rnds8 = new Uint8Array(16);
      _whatwgRNG = _rng = function whatwgRNG() {
        _crypto.getRandomValues(_rnds8);
        return _rnds8;
      };
      _rng();
    } catch (e) {}
  }

  if (!_rng) {
    // Math.random()-based (RNG)
    //
    // If all else fails, use Math.random().  It's fast, but is of unspecified
    // quality.
    var _rnds = new Array(16);
    _mathRNG = _rng = function _rng() {
      for (var i = 0, r; i < 16; i++) {
        if ((i & 0x03) === 0) {
          r = Math.random() * 0x100000000;
        }
        _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
      }

      return _rnds;
    };
    if ('undefined' !== typeof console && console.warn) {
      console.warn('[SECURITY] node-uuid: crypto not usable, falling back to insecure Math.random()');
    }
  }

  // Buffer class to use
  var BufferClass = 'function' === typeof Buffer ? Buffer : Array;

  // Maps for number <-> hex string conversion
  var _byteToHex = [];
  var _hexToByte = {};
  for (var i = 0; i < 256; i++) {
    _byteToHex[i] = (i + 0x100).toString(16).substr(1);
    _hexToByte[_byteToHex[i]] = i;
  }

  // **`parse()` - Parse a UUID into it's component bytes**
  function parse(s, buf, offset) {
    var i = buf && offset || 0,
        ii = 0;

    buf = buf || [];
    s.toLowerCase().replace(/[0-9a-f]{2}/g, function (oct) {
      if (ii < 16) {
        // Don't overflow!
        buf[i + ii++] = _hexToByte[oct];
      }
    });

    // Zero out remaining bytes if string was short
    while (ii < 16) {
      buf[i + ii++] = 0;
    }

    return buf;
  }

  // **`unparse()` - Convert UUID byte array (ala parse()) into a string**
  function unparse(buf, offset) {
    var i = offset || 0,
        bth = _byteToHex;
    return bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]];
  }

  // **`v1()` - Generate time-based UUID**
  //
  // Inspired by https://github.com/LiosK/UUID.js
  // and http://docs.python.org/library/uuid.html

  // random #'s we need to init node and clockseq
  var _seedBytes = _rng();

  // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
  var _nodeId = [_seedBytes[0] | 0x01, _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]];

  // Per 4.2.2, randomize (14 bit) clockseq
  var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

  // Previous uuid creation time
  var _lastMSecs = 0,
      _lastNSecs = 0;

  // See https://github.com/broofa/node-uuid for API details
  function v1(options, buf, offset) {
    var i = buf && offset || 0;
    var b = buf || [];

    options = options || {};

    var clockseq = options.clockseq != null ? options.clockseq : _clockseq;

    // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    var msecs = options.msecs != null ? options.msecs : new Date().getTime();

    // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    var nsecs = options.nsecs != null ? options.nsecs : _lastNSecs + 1;

    // Time since last uuid creation (in msecs)
    var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000;

    // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq == null) {
      clockseq = clockseq + 1 & 0x3fff;
    }

    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs == null) {
      nsecs = 0;
    }

    // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) {
      throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
    }

    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;

    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000;

    // `time_low`
    var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff;

    // `time_mid`
    var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff;

    // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff;

    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80;

    // `clock_seq_low`
    b[i++] = clockseq & 0xff;

    // `node`
    var node = options.node || _nodeId;
    for (var n = 0; n < 6; n++) {
      b[i + n] = node[n];
    }

    return buf ? buf : unparse(b);
  }

  // **`v4()` - Generate random UUID**

  // See https://github.com/broofa/node-uuid for API details
  function v4(options, buf, offset) {
    // Deprecated - 'format' argument, as supported in v1.2
    var i = buf && offset || 0;

    if (typeof options === 'string') {
      buf = options === 'binary' ? new BufferClass(16) : null;
      options = null;
    }
    options = options || {};

    var rnds = options.random || (options.rng || _rng)();

    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80;

    // Copy bytes to buffer, if provided
    if (buf) {
      for (var ii = 0; ii < 16; ii++) {
        buf[i + ii] = rnds[ii];
      }
    }

    return buf || unparse(rnds);
  }

  // Export public API
  var uuid = v4;
  uuid.v1 = v1;
  uuid.v4 = v4;
  uuid.parse = parse;
  uuid.unparse = unparse;
  uuid.BufferClass = BufferClass;
  uuid._rng = _rng;
  uuid._mathRNG = _mathRNG;
  uuid._whatwgRNG = _whatwgRNG;

  return uuid;
}

app.factory('Uuid', uuidFactory);

uuidFactory.$inject = ['uuid'];
function uuidFactory(uuid) {
  var Uuid = function () {
    _createClass(Uuid, [{
      key: 'SESSION_COOKIE',
      get: function get() {
        return SESSION_COOKIE;
      }
    }], [{
      key: 'v4String',
      value: function v4String() {
        return uuid.v4();
      }
    }]);

    function Uuid() {
      _classCallCheck(this, Uuid);
    }

    return Uuid;
  }();

  return Uuid;
}
//# sourceMappingURL=ng.js.map
})();
