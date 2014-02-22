define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var Base = {};

    Base.View = Backbone.View.extend({});

    Base.View.prototype.close = function(){
        this.remove();
        this.unbind();

        if (this.onClose){
            this.onBeforeClose();
            this.onClose();
        }
    };

    Base.View.prototype.addSubView = function(config){
        var options = config.options || {},
            subView = new config.SubView(options),
            parentView = config.parentView,
            $el = config.$el || parentView.$el;

        subView.parentView = parentView;
        parentView.subViews = parentView.subViews || [];
        parentView.subViews.push(subView);
        $el.append(subView.el);
        if (config.callback){
            config.callback();
        }

    };

    Base.View.prototype.closeAllSubViews = function(){
        if(this.subViews && this.subViews.length){
            _.each(this.subViews,function(subview){
                subview.close();
            },this);
        }
    };

    Base.View.prototype.onClose = function(){
        // This is meant to be overridden
    };

    Base.View.prototype.onBeforeClose = function(){
        if (this.parentView){
            this.parentView.trigger('subview:close', this);
            this.parentView.subViews = _.without(this.parentView.subViews, this);
        }

        this.closeAllSubViews();
    };

    return Base;
});
