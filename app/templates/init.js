/*
 * App initialization script
 */

// Load RequireJS configuration file
require(['./require-config'], function(){
    'use strict';

    // Force baseURL setting
    require.config({
	    baseUrl: '/app/'
	});

    require( ['app', 'json!config.app.json'] ,
        function( app, ModuleConfig ){
    	   'use strict';

    	    // Initialize and start the app!
            window.App = new app;
            App.start({ moduleConfig: ModuleConfig });
        }
    );
});