var key = require('../utils/key');
var request = require('request');
var _ = require('underscore');

// The Type Ahead API.
module.exports = function(req, res) {
  var term = req.query.text.trim();
  if (!term) {
    res.json([{
      title: '<i>(enter a search term)</i>',
      text: ''
    }]);
    return;
  }

  /* Type of input */
  console.log(req);
  console.log(term);
  var type = "";

  /* Calling Wolfram API now */
  url ='https://www.blackrock.com/tools/hackathon/security-data?identifiers=' + term;
  console.log("URL: ", url);
  request(url, function(err, response) {
    var data = JSON.parse(response.body);
    if (err || response.statusCode !== 200 || !response.body) {
      console.log('Typeahead got error', err);
      res.status(500).send('Error');
      return;
    }
    var assetClass = data.resultMap.SECURITY[0].assetClass;
    var assetType = data.resultMap.SECURITY[0].assetType;
    var sector = data.resultMap.SECURITY[0].gics1Sector;
    var description = data.resultMap.SECURITY[0].description;
    var currency = data.resultMap.SECURITY[0].currency;

    if(assetClass && assetType && sector && description && currency){
      console.log("complete");
      var table = '<table style="width:100%"><tr><th>Stock Name</th><th>'+ description +'</th></tr><tr><td>Asset Class</td><td>' + assetClass + '</td></tr><tr><td>Asset Type</td><td>' + assetType +'</td></tr><tr><td>Sector</td><td>' + sector + '</td></td><tr><td>Currency</td><td>' + currency + '</td></td></table>';
      console.log("table" + table);
      res.json({
        title: table,
        text: ''
      });
    } else {
      console.log("incomplete");
      res.json([{
        title: '<i>(no results)</i>',
        text: ''
      }]);
    }
  })
};

