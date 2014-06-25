'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var MarmanGenerator = yeoman.generators.Base.extend({
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
    this.log(chalk.magenta('Modular Marionette Apps'));

    // Read the prompts config file
    // var prompts = JSON.parse(this.readFileAsString(path.join(__dirname, './prompts.json')));

    // this.prompt(prompts, function (props) {
      // this.stylePreprocessor = props.stylePreprocessor;
      // this.styleFramework = props.styleFramework;
      // this.unitTestingFramework = props.unitTestingFramework;
      // this.webServer = props.webServer;

      done();
    // }.bind(this));
  }

  // readBowerConfig: function(){
    // this.bower_config = JSON.parse(this.readFileAsString(path.join(__dirname, './base/_base.bower.json')));
  // }
});

MarmanGenerator.prototype.generateApp = function generateApp(){
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

// MarmanGenerator.prototype.stylePreprocessor = function stylePreprocessor(){
//   if(this.stylePreprocessor != "None"){
//     console.log('spp');

    
//   }
// };

// MarmanGenerator.prototype.styleFramework = function styleFramework(){
//   if(this.styleFramework != "None"){
//     console.log('sf');

//   }
// };

// MarmanGenerator.prototype.unitTestingFramework = function unitTestingFramework(){
//   if(this.unitTestingFramework != "None"){
//     console.log('utf');

//   }
// };

// MarmanGenerator.prototype.webServer = function webServer(){
//   if(this.webServer != "None"){
//     console.log('ws');

//   }
// };

module.exports = MarmanGenerator;