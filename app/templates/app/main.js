// Require the config file
require(['config'],
    function() {
        'use strict';

        // Load the Application
        require([
                'app',
                'underscore',
                'foundation'
            ],

            function(LDApp, _, Foundation) {
                LDApp.start();
                
                // First time foundation initialization
                Foundation.libs.reveal.settings = _.extend(Foundation.libs.reveal.settings, {
                        animation: 'fade',
                        animation_speed: 100   
                });

                Foundation.libs.tooltip.settings = _.extend( Foundation.libs.tooltip.settings, {
                    selector: '.has-tip'                
                }
            ); 
        });
    }
);