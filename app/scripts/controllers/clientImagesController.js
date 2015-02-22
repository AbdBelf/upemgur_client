App.ClientImagesController = Ember.ObjectController.extend({
	
	
	actions: {
	    uploadImage: function() {


		   	var formData = new FormData();
		   	var self = this;
		   	filesUpload = $('#inputFile').prop('files');
		   	if (filesUpload[0] == undefined || filesUpload[0].type != "image/jpeg"){
		   		
		   		alert("Error , please choose JPEG format only.");


		   		return;
		   	}
			formData.append('files', filesUpload[0]);
			formData.append('fileName', filesUpload[0].name);

		   	 
		    $.ajax({
					url : WS_HOST + '/upemgur/uploadImage',
					type : "POST",
					processData : false,
					contentType : false,
					data : formData,
					headers : {
						'X-CSRF-Token' : $("#X-CSRF-Token").val(),
					}
			}).then(
                    function(response) {

                    	//self.transitionToRoute('clientImages');
                    	window.location = "http://localhost:8080/upemgur/index";

                    },
                    function(error) {
                        // Failed

                        self.send('openErrorPopup', 'Error',
                            'Server not responding, Please try later...');
                    });
	    }


	}

});

Ember.Handlebars.helper('getImageName', function(url) {
  return url.replace(/^.*[\\\/]/, '');
});
