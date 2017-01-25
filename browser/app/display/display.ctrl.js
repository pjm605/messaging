'use strict';

app.controller('displayCtrl', function ($scope, message) {
	if(message.email && message.phone) {
		$scope.email = message.email
		$scope.phone = message.phone
	}
	else if (message.email) {
		$scope.email = message.email
	}
	else if (message.phone) {
		$scope.phone = message.phone
	}

	$scope.message = message.message
})