App.ClientImageController = Ember.Controller.extend({

actions : {

	deleteImage : function(){

		model = this.get("content");
		self = this;
		$.ajax(
				{
					url : WS_HOST + '/upemgur/deleteImage/'+model.id,
					type : "GET"
				}).then(
                function(response) {


					 window.location = "http://localhost:8080/upemgur/index";
                },
                function(error) {
                    // Failed
                    //to login page
                    self.send('openErrorPopup', 'Error',
                            'Server not responding, Please try later...');
        });
	},
	shareImage : function(){

			model = this.get("content");

			share = true;

			if (model.publicImage == 1){
				share = false;
			}

			self = this;

			$.ajax(
					{
						url : WS_HOST + '/upemgur/shareImage/'+model.id + '?share='+share,
						type : "GET"
					}).then(
	                function(response) {
	                	
	                	

						if (share){

							model.publicImage = 1;
							self.set("isPublic", true);

							self.send('openErrorPopup', 'Public Image',
                            'Picture profile : Public');

						}else{

							model.publicImage = 0;
							self.set("isPublic", false);

							self.send('openErrorPopup', 'Private Image',
                            'Picture profile : Private');
						}
	                	 

	                },
	                function(error) {
	                    // Failed

	                    self.send('openErrorPopup', 'Error',
                            'Server not responding, Please try later...');
	        });
	}
}

});
