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
			'touchstart': 'handleTap',
			'click': 'handleTap'
		},

		initialize: function() {
			this.render();
		},
		render: function () {
			this.$el.html(this.template());

			return this;
		},
		handleTap: function () {

		}
	});

	return DrawView;
});
