var key = require('../utils/key');
var request = require('request');
var _ = require('underscore');


// The API that returns the in-email representation.
module.exports = function(req, res) {
  var term = req.query.text.trim();
  console.log("term " + term);
  handleSearchString(term, req, res);
};

function handleSearchString(term, req, res) {
  console.log(term);
  res.json({
    body: term
      // Add raw:true if you're returning content that you want the user to be able to edit
  });
}
