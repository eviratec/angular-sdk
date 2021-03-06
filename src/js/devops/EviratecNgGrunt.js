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

const DEVOPS_SRC_DIR = './src/js/devops/';
const _require = require.main.require;

const pkgBanner = `/**
 * <%= pkg.name %>@v<%= pkg.version %>
 * Built on <%= grunt.template.today("UTC:yyyy-mm-dd'T'HH:MM:ss'Z'") %>
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
 */\n\n`;

module.exports = 
  class EviratecNgGrunt {

    /**
     * Loads Grunt task configurations
     *
     * @return     {Object}  Grunt config by task name
     */
    static loadTaskConfigs (grunt) {
      
      let tasksConfig;
      
      _require(DEVOPS_SRC_DIR + 'configs')(tasksConfig = {}, grunt);
      
      return tasksConfig;

    }

    /**
     * Constructs the object.
     *
     * @param      {Object}  grunt   A Grunt instance
     */
    constructor (grunt) {
      
      this.tasksConfig = EviratecNgGrunt.loadTaskConfigs(grunt);

      init(this, grunt);

    }

    /**
     * Loads Grunt tasks
     *
     * @param      {Object}  grunt   The Grunt instance
     * @return     {EviratecNgGrunt}  eviratecNgGrunt
     */
    loadGruntTasks (grunt) {
      require('load-grunt-tasks')(grunt);
      return this;
    }

    /**
     * Configures Grunt
     *
     * @param      {Object}  grunt   The Grunt instance to configure
     * @return     {EviratecNgGrunt}  eviratecNgGrunt
     */
    configureGrunt (grunt) {

      let pkg = grunt.file.readJSON('package.json');
      let tasksConfig = this.tasksConfig;

      Object.assign(tasksConfig, {
        
        pkg: pkg,
        pkgName: '<%= pkg.name %>',
        pkgBanner: pkgBanner,

        buildTag: '-dev-' + grunt.template.today('yyyy-mm-dd'),
        buildDir: 'build',

        testSpecDir: 'test',
        distDir: 'dist',
        srcDir: 'src',
        staticDir: '<%= srcDir %>/static',
        tmpDir: '.tmp',

        tmpBuildDir: '<%= tmpDir %>/build',

        outDir: '',

      });

      grunt.initConfig(tasksConfig);

      return this;

    }

    /**
     * Bind Grunt tasks
     *
     * @param      {Object}  grunt   The Grunt instance to bind the tasks to
     * @return     {EviratecNgGrunt}  eviratecNgGrunt
     */
    bindGruntTasks (grunt) {
      _require(DEVOPS_SRC_DIR + 'tasks')(grunt);
      return this;
    }

  };

function init (eviratecNgGrunt, grunt) {
  eviratecNgGrunt
    .loadGruntTasks(grunt)
    .configureGrunt(grunt)
    .bindGruntTasks(grunt);
}
