define(function(require){
  var
    // 3rd Party Dependencies

    // App Dependencies
    utils = require('utils')

    // Module Variables
  , mixins = {}
  ;

  // Grid - Span creates a column of a specified size
  mixins.span = function(width, gutter){
    return utils.extend({
      "width": width + "%"
    , "padding-left": gutter
    , "float": "left"
    }, mixins.boxSizing("border-box"));
  };

  mixins.offset = function(width, gutter){
    return utils.extend({
      "margin-left": width + "%"
    , "padding-left": gutter
    , "float": "left"
    }, mixins.boxSizing("border-box"));
  };

  // Vendor Prefixed
  mixins.boxSizing = function(value){
    return {
      "-webkit-box-sizing": value
    , "-moz-box-sizing": value
    , "-o-box-sizing": value
    , "-ie-box-sizing": value
    , "box-sizing": value
    };
  };

  return mixins;
});
