define([
	'underscore',
	'backbone',
	'app/base',
	'text!templates/draw.html'
],	function (_, Backbone, Base) {

	var DrawView = Base.View.extend({
		tagName: 'div',
		template: _.template(template),
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
