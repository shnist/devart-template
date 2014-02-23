/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var pubsub = _.extend({}, Backbone.Events);

    return pubsub;
});