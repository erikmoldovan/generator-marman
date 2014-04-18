'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var MarionetteBaseSpaGenerator = yeoman.generators.Base.extend({
  initialize: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  promptUser: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('Marionette SPAs made simple: RequireJS/Backbone/Marionette'));

    var prompts = JSON.parse(this.readFileAsString(path.join(__dirname, './prompts.json')));

    this.prompt(prompts, function (props) {
      this.stylePreprocessor = props.stylePreprocessor;
      this.styleFramework = props.styleFramework;
      this.unitTestingFramework = props.unitTestingFramework;
      this.webServer = props.webServer;
      this.extraModules = props.extraModules;

      done();
    }.bind(this));
  }
});

MarionetteBaseSpaGenerator.prototype.generateApp = function generateApp(){
  function scaffoldStructure(parent) {
    parent.mkdir('app');
    parent.mkdir('app/libs');
    parent.mkdir('app/global');
    parent.mkdir('app/modules');
    parent.mkdir('app/modules/shared');
    parent.mkdir('app/modules/shared/extensions');
    parent.mkdir('app/modules/shared/models');
    parent.mkdir('app/modules/shared/views');
    parent.mkdir('app/modules/all');

    parent.mkdir('assets');
    parent.mkdir('assets/styles');
    parent.mkdir('assets/styles/sass');
    parent.mkdir('assets/img');
    parent.mkdir('assets/fonts');
  };

  function createAppTemplates(parent){
    parent.template('Gruntfile.js', 'Gruntfile.js');
    parent.template('index.html', 'index.html');

    parent.template('_bower.json', 'bower.json');
    parent.template('_package.json', 'package.json');
  };

  function createProjectFiles(parent) {
    parent.copy('editorconfig', '.editorconfig');
  };

  function createRuntimeFiles(parent) {
    parent.copy('bowerrc', '.bowerrc');
    parent.copy('gitignore', '.gitignore');
    parent.copy('htaccess', '.htaccess');
  };

  scaffoldStructure(this);
  createAppTemplates(this);
  createProjectFiles(this);
  createRuntimeFiles(this);
};

MarionetteBaseSpaGenerator.prototype.stylePreprocessor = function stylePreprocessor(){
  if(this.stylePreprocessor != "None"){
    console.log('spp');

  }
};

MarionetteBaseSpaGenerator.prototype.styleFramework = function styleFramework(){
  if(this.styleFramework != "None"){
    console.log('sf');

  }
};

MarionetteBaseSpaGenerator.prototype.unitTestingFramework = function unitTestingFramework(){
  if(this.unitTestingFramework != "None"){
    console.log('utf');

  }
};

MarionetteBaseSpaGenerator.prototype.webServer = function webServer(){
  if(this.webServer != "None"){
    console.log('ws');

  }
};

MarionetteBaseSpaGenerator.prototype.extraModules = function extraModules(){
  if(this.extraModules != "None"){
    console.log('em');

  }
};

module.exports = MarionetteBaseSpaGenerator;