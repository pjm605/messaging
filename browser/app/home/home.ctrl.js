'use strict';

app.controller('homeCtrl', function ($scope, $state, $log, homefactory) {
	// on send button click, adds the message to the database and sends the 
	// link to the message via text or email
	$scope.sendMessage = function (message) {
		// add the message to the database
	 	homefactory.addMessage(message)
	 	.then(function (added) {
	 		// send the message to text or email
	 		homefactory.sendMessage(added);
	 	})
	 	.then(function () {
	 		$state.reload();
	 	})
	 	.catch($log.error)
	 }

})