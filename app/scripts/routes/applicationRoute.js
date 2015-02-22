App.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
  
  	actions : {
		openErrorPopup : function(header, content) {
			this.controllerFor('modal').set('header', header);
			this.controllerFor('modal').set('content', content);
			this.render('modal', {
				into : 'application',
				outlet : 'modal',
				view : 'modal'
			});
		},
		closeErrorPopup : function() {
			this.disconnectOutlet({
				outlet : 'modal',
				parentView : 'application'
			});
		}

	}

});
