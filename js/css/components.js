define(function(require){
  var
    // 3rd Party Dependencies

    // App Dependencies
    utils   = require('utils')
  , globals = require('css/globals')

    // Module Variables
  , components = {};
  ;

  components['.well'] = {
    'background-color': globals.background.dark
  , 'box-shadow': '0 1px 0 rgba(255,255,255, 0.13)'
              + ', inset 0 1px 1px rgba(0,0,0, 0.29)'
  };

  return components;
});
