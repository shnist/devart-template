define([
	'underscore',
	'backbone',
	'app/base',
	'text!templates/app.html',
	'app/draw'
],	function (_, Backbone, Base, template, DrawView) {

	var AppView = Base.View.extend({
		el: '.container',
		template: _.template(template),
		events: {},

		initialize: function() {
			this.render();
		},
		render: function () {
			this.$el.html(this.template());

			this.bindEvents();

			return this;
		},
		// Bind any events that are required on startup. Common events are:
		// 'load', 'deviceready', 'offline', and 'online'.
		bindEvents: function() {
			// are we running in native app or in a browser
			window.isphone = false;
			if (document.URL.indexOf("http://") === -1 && document.URL.indexOf("https://") === -1) {
				window.isphone = true;
			}

			if (window.isphone) {
				document.addEventListener('deviceready', this.onDeviceReady, false);
			} else {
				this.onDeviceReady();
			}
		},
		onDeviceReady: function() {
			this.createSubView(DrawView);
		},
		createSubView: function (View) {
			this.addSubView({
				SubView : View,
                parentView : this
			});
		}
	});

	return AppView;
});
