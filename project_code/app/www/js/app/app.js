define([
	'underscore',
	'backbone',
	'app/base',
	'text!templates/app.html',
	'app/draw'
],	function (_, Backbone, Base, template, DrawView) {

	var AppView = Base.View.extend({
		el: '.container',
		tagName: 'section',
		id: '#application',
		template: _.template(template),
		events: {},

		initialize: function() {
			this.bindEvents();
			this.render();
		},
		render: function () {
			this.$el.html(this.template());

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
		// deviceready Event Handler
		//
		// The scope of 'this' is the event. In order to call the 'receivedEvent'
		// function, we must explicity call 'app.receivedEvent(...);'
		onDeviceReady: function() {
			this.createSubView(DrawView);
		},
		createSubView: function (View) {
			this.addSubView({
				SubView : View,
                parentView : this,
                $el: this.$el
			});
		}
	});

	return AppView;
});
