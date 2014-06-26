/*	
 *  Shared module loader definition
 *
 *	This component handles the loading, and parsing, of a module's configuration file
 */

define(function(require){
	var $ = require('jquery'),
		Marionette = require('marionette');

	return Marionette.Controller.extend({
		initialize: function( options ){
			// Sets loader model and collection
			this._baseConfig = new Backbone.Model( options.moduleConfig.base );
            this._modulesList = new Backbone.Collection( options.moduleConfig.modules );

            // Check for flags that may affect module load logic
            var flags = (!_.isUndefined( this._baseConfig.get('flags') )) ? this._baseConfig.get('flags') : {};

            if(!_.isEmpty(this._baseConfig.get('url'))){
            	var self = this;

            	this._modulesList.each(function(model){
	            	var load = model.get('load');

	            	if(_.isArray(load.url)){
	            		for( var i = 0; i < load.url.length; i++ ){
	            			load.url[i] = self._baseConfig.get('url') + "/" + load.url[i];
	            		}
	            	}else{
            			load.url = self._baseConfig.get('url') + "/" + load.url;
	            	}
	            });
            }
		},

		getPaths: function(){
			var paths = this._modulesList.map( function(model){ // This loops through the collection...
                return model.get('load').path; // And pushs each model's load.path attribute into the paths array
            });

            return paths; // returns an array of path strings
		},

		getBaseConfig: function(){
			return this._baseConfig; // returns the base config model
		},

		getModulesList: function(){
			return this._modulesList; // return the modules list collection
		}
	})
});