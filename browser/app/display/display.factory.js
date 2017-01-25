'use strict';

app.factory('displayfactory', function ($http){
	return {
		// get corresponding message using its id
		getMessageById: function (id) {
			return $http.get('/api/message/' + id)
			.then(function (res) {
				return res.data
			}) 
		}
	}
})

