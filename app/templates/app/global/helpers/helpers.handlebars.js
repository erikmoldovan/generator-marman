define(function(require){
    'use strict';

    var Handlebars = require('handlebars'),
        exports = require('exports');

    var helpers = function(){
        // Pluralize
        exports.pluralize = function( number, singular, plural ) {
            number = typeof number === 'function' ? number() : number;
            
            if( number === 1 ) {
                return singular;
            } else {
                return (typeof plural === 'string' ) ? plural : singular + 's';
            }
        };

        // To Currency
        exports.toCurrency = function( number, currency ) {
            var options = {};

            number = typeof number === 'function' ? number() : number;
            
            // If we specify a currency in the template
            // Make sure to set the option
            if( typeof currency === 'string' ) {
                options.currency = currency || 'USD';
            }
            
            return Utils.Num.toCurrency( number, options );
        };

        // Register Helpers
        Handlebars.registerHelper( 'toCurrency', exports.toCurrency );
        Handlebars.registerHelper( 'pluralize', exports.pluralize );
    }

    return helpers();
});