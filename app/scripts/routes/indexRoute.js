App.IndexRoute = Ember.Route.extend({
	beforeModel : function() {
	
		//isAdmin = true;
	   if (isAdmin){

			this.transitionTo('adminImages');

		}else{
			this.transitionTo('clientImages');

		}

	}
});