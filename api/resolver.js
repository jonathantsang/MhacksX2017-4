var key = require('../utils/key');
var request = require('request');
var _ = require('underscore');


// The API that returns the in-email representation.
module.exports = function(req, res) {
  term = req;
  console.log("term: " + term);
  handleSearchString(term, req, res);
};

function handleSearchString(term, req, res) {
  var table = '<table style="width:100%"><tr><th>Stock Name</th><th>'+ term.descrip +'</th></tr><tr><td>Asset Class</td><td>' + term.aClass + '</td></tr><tr><td>Asset Type</td><td>' + term.aType +'</td></tr><tr><td>Sector</td><td>' + term.sect + '</td></td><tr><td>Currency</td><td>' + term.curr + '</td></td></table>';
  console.log(table);
  res.json({
    body: table
      // Add raw:true if you're returning content that you want the user to be able to edit
  });
}
