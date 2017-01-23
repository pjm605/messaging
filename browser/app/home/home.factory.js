'use strict';

app.factory('homefactory', function ($http){
	return {
		getMessage: function () {
			return $http.get('/api/message')
			.then(function (res) {
				return res.data
			})
		},
		addMessage: function (message){
			return $http.post('/api/message', message)
			.then(function (res) {
				return res.data
			})
		}
	}
})