'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

String.prototype.toTitleCase = function() {
	return this.toString().replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
};

function toTitleCase(str) {
	return str.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

var ModuleGenerator = yeoman.generators.NamedBase.extend({
	init: function() {
		console.log('You called the Module subgenerator with the argument ' + this.name + '.');
	},

	files: function() {

		this.moduleTitleCaseName = this.name.toTitleCase();
		this.modulePascalCaseName = this.moduleTitleCaseName.replace(/\s/g, '');
		this.moduleLowerCaseName = this.modulePascalCaseName.toLowerCase();
		this.moduleUnderscoreCaseName = this.moduleTitleCaseName.toLowerCase().replace(/\s/g, '_');

		var moduleDir = 'app/modules/all/' + this.moduleUnderscoreCaseName;
		this.mkdir(moduleDir);
		this.template('_myModule/config._myModule.json', moduleDir + '/config.' + this.moduleUnderscoreCaseName + '.json');
		this.template('_myModule/module._myModule.js', moduleDir + '/module.' + this.moduleUnderscoreCaseName + '.js');
	}
});

module.exports = ModuleGenerator;