define(function(require){
  var
    // 3rd Party Dependencies
    $         = require('jquery')
  , _         = require('underscore')
  , Backbone  = require('backbone')

    // App Dependencies

    // Module Variables
  , utils
  ;

  utils.$ = $;

  utils.Model       = Backbone.Model;
  utils.View        = Backbone.View;
  utils.Collection  = Backbone.Collection;
  utils.Router      = Backbone.Router;
  utils.Events      = Backbone.Events;

  _.extend(utils, _);

  return utils;
});
