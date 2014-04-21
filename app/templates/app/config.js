require.config({
    baseUrl: 'app/libs',
    paths: {
        // Make this easier to access
        'libs': '.',

        // Underscore functionality provided by lo-dash
        'underscore': 'lodash/dist/lodash.underscore',

        // jQuery
        'jquery': 'jquery/jquery',

        // Fastclick
        'fastclick': 'fastclick/lib/fastclick',

        // Backbone
        'backbone': 'backbone/backbone',

        // Marionette
        'marionette': 'marionette/lib/backbone.marionette',

        // Lunr - Full Text Search.
        // Note: Dependency for backgrid filter
        'lunr': 'lunr.js/lunr',

        // Backbone.picky
        'backbone.picky': 'backbone.picky/src/backbone.picky',
        
        // Backgrid Pageable
        'backbone.pageable': 'backbone-pageable/lib/backbone-pageable',

        // Foundation Module
        'foundation': 'foundation/js/foundation',

        // Foundation Tooltip
        'foundation.tooltip': 'foundation/js/foundation/foundation.tooltip',

        // Foundation Dropdown
        'foundation.dropdown': 'foundation/js/foundation/foundation.dropdown',

        // Backgrid Component
        'backbone.backgrid': 'backgrid/lib/backgrid',

        // Backgrid Paginator
        'backbone.backgrid.paginator': 'backgrid-paginator/backgrid-paginator',

        // Backgrid Select All Extension
        'backbone.backgrid.selectall': 'backgrid-select-all/backgrid-select-all',

        // Backgrid Filter
        'backbone.backgrid.filter': 'backgrid-filter/backgrid-filter',

        // Handlebars
        'handlebars': 'handlebars/handlebars',
        
        // Handlebars Text Helper
        'hbs': 'requirejs-hbs/hbs',

        // Requirejs Text Helper
        'text': 'requirejs-text/text',

        // Requirejs Text Helper
        'sticky': 'sticky/jquery.sticky',

        // Modernizr
        'modernizr': 'modernizr/modernizr',

        // RequireJS Plugin - JSON
        'json': 'requirejs-plugins/src/json'

        // Handlebar helpers
        // 'handlebar.helpers': 'config/handlebars/helpers',


        // === Common Modules ===

        // Views
        // 'common.views': 'common/views/views',

        // // Layouts
        // 'common.layouts': 'common/layouts/layouts',

        // // Utilities
        // 'common.utilities': 'common/utilities/all',

        // // Grid Module
        // 'components.grid': 'common/components/grid/grid',

        // // Grid Pagination Module
        // 'components.grid.pagination': 'common/components/grid/grid.pagination',

        // // Tab Components
        // 'components.tabs': 'common/components/tabs/tabs',

        // // Drop Down Components
        // 'components.dropdown': 'common/components/dropdown/dropdown',

        // // Loan Pagination
        // 'components.pagination.page': 'common/components/pagination/page/page',
        

        // === Application Paths ===

        // Loan Delivery
        // 'loan_delivery': 'modules/loan_delivery',

        // // Imports
        // 'imports': 'modules/imports',

        // // Pools
        // 'pools': 'modules/pools',

        // // Commitments
        // 'commitments': 'modules/commitments',

        // // Login
        // 'login': 'modules/login',

        // // Settings
        // 'settings': 'modules/settings',

        // // Support & Guidance
        // 'support': 'modules/support',
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

        'lunr': {
            deps: ['backbone'],
            exports: 'lunr'
        },

        'backbone.picky': {
            deps: ['backbone'],
            exports: 'Backbone.Picky'
        },

        // Backbone Pageable
        'backbone.pageable': {
            deps: ['backbone']
        },

        // Backgrid
        'backbone.backgrid': {
            deps: ['backbone'],
            exports: 'Backgrid'
        },

        // Backgrid paginator
        'backbone.backgrid.paginator': {
            deps: ['backbone.backgrid'],
            exports: 'Backgrid.Extension.Paginator'
        },

        // Backgrid Selectall
        // Dependency: Backgrid
        'backbone.backgrid.selectall': {
            deps: ['backbone.backgrid']
        },

        // Backgrid Filter
        // Dependency: Backgrid
        'backbone.backgrid.filter': ['backbone.backgrid', 'lunr'],

        // Marionette Module
        'marionette': {
            // Ensure that marionette is loaded after backbone
            deps: ['backbone'],
            // Expose Marionette via the 'Backbone' namespace
            exports: 'Backbone.Marionette'
        },

        // fastclick
        'fastclick': {
            // Ensure that foundation is loaded after jquery
            deps: ['jquery'],
            // Expose the Foundation module
            exports: 'Fastclick'
        },

        // Foundation Core
        'foundation': {
            // Ensure that foundation is loaded after jquery
            deps: ['jquery', 'modernizr', 'fastclick'],
            // Expose the Foundation module
            exports: 'Foundation'
        },

        // Foundation Tooltip
        'foundation.tooltip': {
            deps: [
            'foundation'
            ]
        },        

        // Foundation Tooltip
        'foundation.dropdown': {
            deps: [
            'foundation'
            ]
        }
    }
});