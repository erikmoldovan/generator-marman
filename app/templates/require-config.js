require.config({
    paths: {
        // Underscore functionality provided by lo-dash
        'underscore': 'libs/lodash/dist/lodash.underscore',

        // jQuery
        'jquery': 'libs/jquery/jquery',

        // Backbone
        'backbone': 'libs/backbone/backbone',

        // Marionette
        'marionette': 'libs/marionette/lib/backbone.marionette',

        // Handlebars
        'handlebars': 'libs/handlebars/handlebars',
        
        // Handlebars Text Helper
        'hbs': 'libs/requirejs-hbs/hbs',

        // Requirejs Text Helper
        'text': 'libs/requirejs-text/text',

        // RequireJS Plugin - JSON
        'json': 'libs/requirejs-plugins/src/json',

        // Handlebar helpers
        'handlebar.helpers': 'global/helpers/helpers.handlebars'
    },

    shim: {
        'handlebars': {
            exports: 'Handlebars'
        },

        'hbs': {
            deps: ['text', 'handlebars', 'handlebar.helpers']
        },
        
        'backbone': {
            // Dependencies for backbone
            deps: ['jquery', 'underscore'],
            // Grab Backbone from the global 'namespace'
            exports: 'Backbone'
        },

        // Marionette Module
        'marionette': {
            // Ensure that marionette is loaded after backbone
            deps: ['backbone'],
            // Expose Marionette via the 'Backbone' namespace
            exports: 'Backbone.Marionette'
        }
    }
});