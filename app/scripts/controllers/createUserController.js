App.CreateUserController = Ember.Controller.extend({

email : "",
password : "",

actions : {

	createUser : function(){

		this.email = $("#createUserEmail").val();
		this.password = $("#createUserPassword").val();
		self = this;
		$.ajax({
					url : WS_HOST + '/upemgur/createUser',
					type : "POST",
					dataType : 'json',
					data : {
						"email" : self.email,
						"password" : self.password,
					},
					headers : {
						'X-CSRF-Token' : $("#X-CSRF-Token").val(),
					}
			}).then(
                    function(response) {

                    	self.send('openErrorPopup', 'Succes !',
                            'User created successfully ...');

                    	$("#createUserEmail").val("");
                    	$("#createUserPassword").val("");

                    },
                    function(error) {
                        // Failed
                        self.send('openErrorPopup', 'Error',
                            'Server not responding, Please try later...');

                    });

	}
}

});
