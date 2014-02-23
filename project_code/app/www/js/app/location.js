define([
	'underscore',
	'backbone',
	'pubsub',
	'app/base',
	'text!templates/location.html'
],	function (_, Backbone, pubsub, Base, template) {

	var LocationView = Base.View.extend({
		template: _.template(template),
		className: 'location',
		events: {
			'touchstart #btn-location': 'getGeoLocation',
			'touchstart #btn-close': 'close'
		},

		initialize: function() {
			this.render();
		},
		render: function () {
			this.$el.html(this.template());

			return this;
		},
		getGeoLocation: function () {
			navigator.geolocation.getCurrentPosition(this.locationSuccess, this.locationError);
		},
		locationSuccess: function (position) {
			this.$('#location-latitude').html('Latitude: ' + position.coords.latitude);
			this.$('#location-longitude').html('Longitude: ' + position.coords.longitude);
			this.$('#location-altitude').html('Altitude: ' + position.coords.altitude);
			this.$('#location-accuracy').html('Accuracy: ' + position.coords.accuracy);
			this.$('#location-altitude-accuracy').html('Altitude Accuracy: ' + position.coords.altitudeAccuracy);
			this.$('#location-heading').html('Heading: ' + position.coords.heading);
			this.$('#location-speed').html('Speed: ' + position.coords.speed);
			this.$('#location-timestamp').html('Timestamp: ' + position.timestamp);

			this.$('#btn-close').removeClass('hidden');
		},
		locationError: function (error) {
			alert('Location error' + error);
		},
		onClose: function () {
			pubsub.trigger('location:close');			
		}
	});

	return LocationView;
});
