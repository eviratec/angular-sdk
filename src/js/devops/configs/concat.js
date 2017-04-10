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
 */'use strict';

module.exports = initConcatConfig;

function initConcatConfig ($config) {

  $config['concat'] = {};

  $config['concat']['options'] = {
    stripBanners: true,
  };

  /* concat:ngEsSrc */
  $config['concat']['ngEsSrc'] = {
    files: {
      '<%= tmpBuildDir %>/ng.es': [
        '<%= srcDir %>/ng/*.es',
        '<%= srcDir %>/ng/*/**/*.es',
      ],
    },
  };
  
  /* concat:eviratecJs */
  $config['concat']['eviratecJs'] = {
    options: {
      banner: '<%= pkgBanner %>(function(){"use strict";\n',
      footer: '})();\n',
    },
    src: [
      '<%= tmpBuildDir %>/ng.js',
    ],
    dest: '<%= pkg.name %>.js',
  };

}
