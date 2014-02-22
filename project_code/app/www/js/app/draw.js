define([
	'underscore',
	'backbone',
	'app/base'
],	function (_, Base, Backbone) {

	var DrawView = Base.View.extend({
		tagName: 'button',
		className: 'btn',
		id: 'btn-draw',
		events: {
			'touchstart': 'handleTap',
			'click': 'handleTap'
		},

		initialize: function() {
			this.render();
		},
		render: function () {
			return this;
		},
		handleTap: function () {

		}
	});

	return DrawView;
});
