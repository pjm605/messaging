'use strict';

app.controller('displayCtrl', function ($scope, message) {
	if(message.email && message.phone) {
		$scope.from = message.email + " & " + message.phone
	} 
	else if (message.email) {
		$scope.from = message.email
	}
	else if (message.phone) {
		$scope.from = message.phone
	}

	$scope.message = message.message
})