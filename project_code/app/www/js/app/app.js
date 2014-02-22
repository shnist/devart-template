define([
	'underscore',
	'backbone',
	'text!templates/app.html'
],	function (_, Backbone, template) {

	var AppView = Backbone.View.extend({
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
			document.addEventListener('deviceready', this.onDeviceReady, false);
		},
		// deviceready Event Handler
		//
		// The scope of 'this' is the event. In order to call the 'receivedEvent'
		// function, we must explicity call 'app.receivedEvent(...);'
		onDeviceReady: function() {
			this.receivedEvent('deviceready');
		},
		// Update DOM on a Received Event
		receivedEvent: function(id) {
			console.log('Received Event: ' + id);
			alert('Its alive!');
		}
	});

	return AppView;
});
