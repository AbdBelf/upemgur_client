App.Router.map(function () {
  // Add your routes here

  this.resource('clientImages', { path: 'images' }, function() {
		this.resource('clientImage', { path: ':image_id' }, function() {
			
		});
	});

  this.resource('adminImages', { path: 'admin' }, function() {
		this.resource('adminImage', { path: ':image_id' }, function() {
			
		});
		this.resource('createUser', { path: 'createUser' }, function() {
			
		});
	});

});


