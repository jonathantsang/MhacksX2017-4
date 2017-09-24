var key = require('../utils/key');
var request = require('request');
var _ = require('underscore');


// The API that returns the in-email representation.
module.exports = function(req, res) {
  console.log("resolver");
  var term = '';
  handleSearchString(term, req, res);
};

function handleSearchString(term, req, res) {
  var table = '<table style="width:100%"><tr><th>Stock Name</th><th>'+ req.descrip +'</th></tr><tr><td>Asset Class</td><td>' + req.aClass + '</td></tr><tr><td>Asset Type</td><td>' + req.aType +'</td></tr><tr><td>Sector</td><td>' + req.sect + '</td></td><tr><td>Currency</td><td>' + req.curr + '</td></td></table>';
  console.log(table);
  res.json({
    body: table
      // Add raw:true if you're returning content that you want the user to be able to edit
  });
}