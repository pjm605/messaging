'use strict';

app.config(function ($stateProvider) {
  $stateProvider.state('display', {
    url: '/display/:id',
    templateUrl: '/browser/app/display/display.html',
    controller:'displayCtrl',
    resolve: {
        // resolve the matching message id
    	message: function (displayfactory, $stateParams) {
    		return displayfactory.getMessageById($stateParams.id);
    	}
    }
  });
});