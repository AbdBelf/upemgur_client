App.AdminImagesRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {

    	
    	
        		return $.ajax(
					{      //public/upemgur/getPublicImages'  upemgur/getAllImages
						url : WS_HOST + '/upemgur/getAllImages',
						type : "GET",
						contentType : 'application/json'						
					}).then(
                    function(response) {
                        return response;

                    },
                    function(error) {
                        // Failed
                        //to login page
                        window.location = "http://localhost:8080/login";
                    });

    },
    setupController : function(controller, model) {
 		
 		controller.set('model', model.content);
	}
});
