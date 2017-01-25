'use strict';

app.factory('homefactory', function ($http, $q){

	return {
		addMessage: function (message){
			// call server post  to add the message to the sql database
			return $http.post('/api/message', message)
			.then(function (res) {
				return res.data
			})
		},
		sendMessage: function (data) {
			// call the server sender api to send the link via text or email
			if(data.phone && data.email) {
				var phone = $http.get('/api/twilio/' + data.phone + '/' + data.id)
				var email = $http.get('/api/mailgun/' + data.email + '/' + data.id)
				$q.all([phone, email])
				.then(function (res) {
					return res.data
				})
			}
			else if(data.phone) {
				return $http.get('/api/twilio/' + data.phone + '/' + data.id)
				.then(function (res) {
					return res.data
				})
			} 
			else if (data.email) {
				return $http.get('/api/mailgun/' + data.email + '/' + data.id)
				.then(function (res) {
					return res.data
				})
			}
		}
	}
})