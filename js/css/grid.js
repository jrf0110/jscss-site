define(function(require){
  var
    // 3rd Party Dependencies

    // App Dependencies
    utils   = require('utils')
  , globals = require('css/globals')
  , mixins  = require('css/mixins')

    // Module Variables
    grid = {
      ".grid": {}
    , ".grid .row": {
        'display': 'table'
      , 'width': '100%'
      }
    , ".grid .row > .span:first-child": {
        "padding-left": "0"
      }
    }
  ;

  // build grid components
  var width, remainder;
  for (var i = 1, len = globals.grid.columns; i <= len; i++){
    width = (i / len) * 100;
    remainder = (width % len);
    console.log(i, remainder);
    // Build the spans
    grid[".grid .row"]["> .span" + i] = mixins.span(width, globals.grid.gutterWidth);
    // Offsets
    grid[".grid .row"]["> .offset" + i] = mixins.offset(width, globals.grid.gutterWidth);
  }

  return grid;
});
