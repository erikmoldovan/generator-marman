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

		askFor: function() {
				var done = this.async();

				var prompts = [{
						name: 'moduleName',
						message: 'what module is this submodule for?'
				}];

				this.prompt(prompts, function(props) {
						this.moduleName = props.moduleName;

						done();
				}.bind(this));
		},

		files: function() {

				console.log(this.moduleName);

				this.submoduleTitleCaseName = this.name.toTitleCase();
				this.submodulePascalCaseName = this.submoduleTitleCaseName.replace(/\s/g, '');
				this.submoduleLowerCaseName = this.submodulePascalCaseName.toLowerCase();
				this.submoduleUnderscoreCaseName = this.submoduleTitleCaseName.toLowerCase().replace(/\s/g, '_');

				this.moduleTitleCaseName = this.moduleName.toTitleCase();
				this.modulePascalCaseName = this.moduleTitleCaseName.replace(/\s/g, '');
				this.moduleLowerCaseName = this.modulePascalCaseName.toLowerCase();
				this.moduleUnderscoreCaseName = this.moduleTitleCaseName.toLowerCase().replace(/\s/g, '_');

				var submoduleDir = 'app/modules/all/' + this.moduleUnderscoreCaseName + '/' + this.submoduleUnderscoreCaseName; 
				this.mkdir(submoduleDir);
				this.template('_mySubmodule/controller._mySubmodule.js', submoduleDir + '/controller.' + this.submoduleUnderscoreCaseName + '.json');
				this.template('_mySubmodule/module._mySubmodule.js', submoduleDir + '/module.' + this.submoduleUnderscoreCaseName + '.js');

				var viewsDir = submoduleDir + '/views';
				this.mkdir(viewsDir);
				this.template('_mySubmodule/views/layout.view.js', viewsDir + '/controller.' + this.submoduleUnderscoreCaseName + '.json');

				var templatesDir = viewsDir + '/templates';
				this.mkdir(templatesDir);
				this.template('_mySubmodule/views/templates/_mySubmodule.layout.hbs', templatesDir + '/layout.' + this.submoduleUnderscoreCaseName + '.hbs');

		}
});

module.exports = ModuleGenerator;