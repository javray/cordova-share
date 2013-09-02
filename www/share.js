/**
 * 
 * Phonegap share plugin for Android
 * Kevin Schaul 2011
 *
 */
(function(cordova){
	var Share = function() {};

	Share.prototype.show = function(content, success, fail) {
		return cordova.exec( function(args) {
			success(args);
		}, function(args) {
			fail(args);
		}, 'Share', '', [content]);
	};

    cordova.addConstructor(function() {
        window.share = new Share();
        
        // backwards compatibility
        window.plugins = window.plugins || {};
        window.plugins.share = window.share;
    });
})(window.PhoneGap || window.Cordova || window.cordova);
