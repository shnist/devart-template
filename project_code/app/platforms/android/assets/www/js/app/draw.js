define([
	'underscore',
	'backbone',
	'app/base',
	'text!templates/draw.html'
],	function (_, Backbone, Base, template) {

	var DrawView = Base.View.extend({
		template: _.template(template),
		className: 'draw',
		events: {
			'touchstart': 'startAccelerometerWatch',
			'touchend': 'stopAccelerometerWatch'
		},

		initialize: function() {
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
		}
	});

	return DrawView;
});
