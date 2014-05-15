/*
 * App initialization script
 */

// Requires the require config file
require(['./require-config'], function(){
    'use strict';

    // Force baseURL to set before app definition is loaded
    require.config({
	    baseUrl: '/app/'
	});

    require([
            'app',
            'json!config.app.json'
        ], 

        function(app, ModuleConfig){
    	   'use strict';

    	   // Initialize and start the app!
            window.App = new app;
            App.start({ moduleConfig: ModuleConfig });
        }
    );
});