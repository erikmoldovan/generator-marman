define([
        'marionette',
        'foundation'
    ],

    function( Marionette ){
        'use strict';

        // Dialog Region Object
        // Handles displaying views in foundation reveal
        // Also takes care of destroying views and unbinding from 'reveal' event
        // The application should always use the dialog region to display Modals
        return Marionette.Region.extend({
            el: '#dialog-region', // Application Dialog / Modal

            // When the Dialog Region shows
            onShow: function( view ) {                
                var self = this;
                
                // Listen to the view's close dialog event. 
                // Views should be able to close dialogs.
                this.listenTo( view, 'dialog:close', this.closeReveal, this );
                    
                // Add the close reveal button
                this.$el.append( '<a class="close-reveal-modal">&#215;</a>' );

                // Open the Reveal Modal
                this.$el.foundation('reveal', 'open' )
                    // Listen to the modal close event, once
                    .one( 'closed',  function(){
                        // Call the closeDialog method
                        self.closeDialog();
                    });
            },

            // Closes Reveal via View
            closeReveal: function(){
                // Close the Reveal Modal
                this.$el.foundation('reveal', 'close' );
            },

            // Close Dialog Handler
            // Unbinds from events
            // Closes the Region and Views
            // Empty's the region's inner dom
            closeDialog: function() {
                this.stopListening();
                this.close();
                this.$el.empty();
            }
        });
    }
);