'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var MarionetteBaseSpaGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('RequireJS + Backbone/Marionette + Underscore + Handlebars + SASS + Jasmine'));

    var prompts = [
      {
        type: 'confirm',
        name: 'unitTests',
        message: 'Would you like to use Jasmine?',
        default: false
      }
    ];

    this.prompt(prompts, function (props) {
      this.unitTests = props.unitTests;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/libs');
    this.mkdir('app/global');
    this.mkdir('app/modules');
    this.mkdir('app/modules/shared');
    this.mkdir('app/modules/shared/extensions');
    this.mkdir('app/modules/shared/models');
    this.mkdir('app/modules/shared/views');
    this.mkdir('app/modules/all');

    this.mkdir('assets');
    this.mkdir('assets/styles');
    this.mkdir('assets/styles/sass');
    this.mkdir('assets/img');
    this.mkdir('assets/fonts');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = MarionetteBaseSpaGenerator;