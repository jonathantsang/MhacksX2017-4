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
    var score = data.resultMap.SECURITY[0].score;
    console.log(score);
    
    if(score){
      res.json([{
        title: data.resultMap.SECURITY[0].score,
      }]);
    } else {
      console.log('??? something happen');
      res.json([{
        title: '<i>(no results)</i>',
        text: ''
      }]);
    }
  })
};

