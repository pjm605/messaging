'use strict';

app.controller('displayCtrl', function ($scope, message) {
	if(message.email && message.phone) {
		$scope.to = message.email + " & " + message.phone
	} 
	else if (message.email) {
		$scope.to = message.email
	}
	else if (message.phone) {
		$scope.to = message.phone
	}

	$scope.message = message.message
})