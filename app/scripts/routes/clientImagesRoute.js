App.ClientImagesRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {

    	self = this;
    	
		return $.ajax(
			{
                //public/upemgur/getPublicImages
                // /upemgur/getImageUser
				url : WS_HOST + '/upemgur/getImageUser',
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
