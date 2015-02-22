App.AdminImageRoute = Ember.Route.extend({

	model: function (params) {

    	return params.image;

    },
    setupController : function(controller, model) {
 		
 		controller.set('model', model);
 		controller.set('imageUrl', model.url);
		controller.set('imageExif', model.exif);


		if (model.publicImage == 1){
			controller.set('isPublic', true );

		}else{
			controller.set('isPublic', false );

		}
		
		$.ajax(
					{
						url : WS_HOST + '/public/upemgur/downloadImage/'+model.id,
						type : "GET"
					}).then(
                    function(response) {

                    	//clientImageUploaded
						controller.set('base64' , "data:image/jpg;base64," + response);
						
                    },
                    function(error) {
                        // Failed
                         self.send('openErrorPopup', 'Error',
                            'Server not responding, Please try later...');
            });
	}

});
