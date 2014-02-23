define([
	'underscore',
	'backbone',
	'pubsub',
	'app/base',
	'text!templates/draw.html'
],	function (_, Backbone, pubsub, Base, template) {

	var DrawView = Base.View.extend({
		template: _.template(template),
		className: 'draw',
		events: {
			'touchstart #btn-draw': 'startAccelerometerWatch'
		},

		initialize: function() {
			_.bindAll(this, 'stopAccelerometerWatch');

			this.acceleration = null;

			this.render();
		},
		render: function () {
			this.$el.html(this.template());

			return this;
		},
		startAccelerometerWatch: function () {
			var options = {
				frequency: 500
			};

			this.acceleration = navigator.accelerometer.watchAcceleration(this.onSuccess, this.onError, options);

			window.setTimeout(this.stopAccelerometerWatch, 10000);
		},
		onSuccess: function (acceleration) {
			this.$('#acceleration-x').html(acceleration.x);
			this.$('#acceleration-y').html(acceleration.y);
			this.$('#acceleration-z').html(acceleration.z);
			this.$('#acceleration-timestamp').html(acceleration.timestamp);
		},
		onError: function (error) {
			console.log('Error!:' + error);
		},
		stopAccelerometerWatch: function () {
			navigator.accelerometer.clearWatch(this.acceleration);
			this.acceleration = null;

			alert('Time is up!');
		}
	});

	return DrawView;
});
