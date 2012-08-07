define(function(require){
  var
    // 3rd Party Dependencies
    $         = require('jquery')
  , Backbone  = require('backbone')

    // App Dependencies

    // Module Variables
  , utils
  ;

  utils.$ = $;


  utils.Model = Backbone.Model;
  utils.View = Backbone.View;
  utils.Collection = Backbone.Collection;
  utils.Router = Backbone.Router;

  return utils;
});
