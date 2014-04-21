// Require the config file
require(['config'], function() {
    'use strict';

    // Load the Application
    require(['App', 'underscore', 'modules/main/main.app', 'foundation'], function(App, _, MainApp, Foundation) {

        App.start();
        
        // First time foundation initialization
        Foundation.libs.reveal.settings = _.extend(Foundation.libs.reveal.settings, {
                animation: 'fade',
                animation_speed: 100   
        });

        Foundation.libs.tooltip.settings = _.extend( Foundation.libs.tooltip.settings, {
            selector: '.has-tip'                
        }); 
    }); 
});