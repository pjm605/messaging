'use strict';

app.controller('homeCtrl', function ($scope, $state, $log, homefactory) {
	 homefactory.getMessage()
	 .then(function (res){
	 	$scope.testing = res[0].message
	 })

	 $scope.sendMessage = function (message) {
	 	homefactory.addMessage(message)
	 	.then(function () {
	 		$state.reload();
	 	})
	 	.catch($log.error)
	 }
})