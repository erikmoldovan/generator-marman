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

    // Read the prompts config file
    var prompts = JSON.parse(this.readFileAsString(path.join(__dirname, './prompts.json')));

    this.prompt(prompts, function (props) {
      this.stylePreprocessor = props.stylePreprocessor;
      this.styleFramework = props.styleFramework;
      this.unitTestingFramework = props.unitTestingFramework;
      this.webServer = props.webServer;
      this.extraModules = props.extraModules;

      done();
    }.bind(this));
  },

  readBowerConfig: function(){
    // this.bower_config = JSON.parse(this.readFileAsString(path.join(__dirname, './base/_base.bower.json')));
  }
});

MarionetteBaseSpaGenerator.prototype.generateApp = function generateApp(){
  var scaffold_config = JSON.parse(this.readFileAsString(path.join(__dirname, './scaffold.json')));

  var parent = this;

  this._.forEach(scaffold_config, function(section){
    var method = section.method,
        list = section.list;

    for(var i = 0; i < list.length; i++){
      parent[method](list[i]);
    }
  });
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
  if(this.extraModules.length > 0){
    console.log('em');

  }
};

module.exports = MarionetteBaseSpaGenerator;