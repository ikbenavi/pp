var req = require('request');
module.exports = (request, response) => {
  req("http://api.tvmaze.com/shows/6771/episodes", function(err, res, body) {
    response.json(JSON.parse(body));
  });
};