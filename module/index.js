'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

String.prototype.toTitleCase = function() {
	return this.toString().replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

function toTitleCase(str)
{
	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

var ModuleGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
	console.log('You called the Module subgenerator with the argument ' + this.name + '.');
  },

  files: function () {
	this.titleCaseName = this.name.toTitleCase();
	this.pascalCaseName = this.titleCaseName.replace(/\s/g,'');
	this.lowerCaseName = this.name.toLowerCase().replace(/\s/g,'');
	var moduleDir = 'app/modules/all/' + this.pascalCaseName;
	this.mkdir(moduleDir);
	// this.directory('_myModule', moduleDir);
	this.template('_myModule/config._myModule.json', moduleDir + '/config.' + this.pascalCaseName + '.json');
	this.template('_myModule/module._myModule.js', moduleDir + '/module.' + this.pascalCaseName + '.js');
  }
});

module.exports = ModuleGenerator;