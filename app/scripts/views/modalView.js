App.ModalView = Ember.View.extend({
	didInsertElement : function() {
		Ember.run.next(this, function() {
			this.$('.modal, .modal-backdrop').addClass('in');
		});
	},
	actions : {
		closeErrorView : function() {
			var view = this;
			// use one of: transitionend webkitTransitionEnd oTransitionEnd
			// MSTransitionEnd
			// events so the handler is only fired once in your browser
			this.$('.modal, .modal-backdrop').one("transitionend",
					function(ev) {
						view.controller.send('closeErrorPopup');
					});

			this.$('.modal, .modal-backdrop').removeClass('in');
		}
	}
});