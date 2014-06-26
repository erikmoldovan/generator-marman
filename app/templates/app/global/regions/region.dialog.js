define(function(require){
    'use strict';

    var $ = require('jquery'),
        Marionette = require('marionette');

    // Dialog Region Object
    return Marionette.Region.extend({
        // When the Dialog Region shows
        onShow: function( view ) {                
            var self = this;
            
            // Listen to the view's close dialog event. 
            // Views should be able to close dialogs.
            this.listenTo( view, 'dialog:close', this.closeReveal, this ); // For Close BUTTON only, not top right X
        },

        closeReveal: function(){

        },

        closeDialog: function() {
            this.stopListening();
            this.close();
            this.$el.empty();
        }
    });
});