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

			this.createSubView(DrawView);

			return this;
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
