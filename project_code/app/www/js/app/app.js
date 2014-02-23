define([
	'underscore',
	'backbone',
	'app/base',
	'pubsub',
	'text!templates/app.html',
	'app/location',
	'app/draw'
],	function (_, Backbone, Base, pubsub, template, LocationView, DrawView) {

	var AppView = Base.View.extend({
		el: '.container',
		template: _.template(template),
		events: {},

		initialize: function() {
			this.subscriptions();
			this.render();
		},
		subscriptions: function () {
			this.listenTo(pubsub, 'location:close', this.createDraw);
		},
		render: function () {
			this.$el.html(this.template());

			this.createSubView(LocationView);

			return this;
		},
		createSubView: function (View) {
			this.addSubView({
				SubView : View,
                parentView : this
			});
		},
		createDraw: function () {
			this.createSubView(DrawView);
		}
	});

	return AppView;
});
