/*
 *	Global Cache Manager
 *
 *	All entries into localStorage, and requests to such, should be handled through this
 */

define(function(require){
	var $ = require('jquery'),

		Marionette = require('marionette');

	return Marionette.Controller.extend({
        // Saves a preference to localStorage
        savePreference: function(key, data) {
            // If there are preference keys that don't belong
            // to the current serverSessionId, remove those keys
            // before saving the new preference
            for (var i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i).indexOf(this.getPrefrenceKeyPrefix()) !== 0) {
                    console.log("savePreference.removeItem " + localStorage.key(i));
                    localStorage.removeItem(localStorage.key(i));
                }
            }

            var newKey = this.getPrefrenceKeyPrefix() + key;
            data =  JSON.stringify(data);
            localStorage.setItem(newKey, data);
            console.log("savePreference " + newKey + " -- " + data);
         },

        // Reads a preference from localStorage
        getPreference: function(key) {
            var newKey = this.getPrefrenceKeyPrefix() + key;
            var data = $.parseJSON(localStorage.getItem(newKey));
            console.log("getPreference " + newKey + " -- " + data);
            return data;
        },

        getPrefrenceKeyPrefix: function() {
            return "Pref:" + window.serverSessionId + ":";
        }
	});
});