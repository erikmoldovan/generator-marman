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

    require(['app'], function(App){
    	'use strict';

    	// Start the app!
        App.start();
    });
});