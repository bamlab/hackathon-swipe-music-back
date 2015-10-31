var https = require('http');
var Q = require('q');


var SpotifyManager = function() {};


// TODO make the request to spotify works
// @see : https://developer.spotify.com/web-api/endpoint-reference/
SpotifyManager.prototype.getRelatedSongs = function (artist, limit) {

  var resDefer = Q.defer();
  https.request({
    host: "api.spotify.com",
    path: '/v1/search/?q="'+artist+'"',
    method: "GET",
    headers: { "Accept": "application/json" }
  }, function (response) {

    response.on('data', function (data) {
      resDefer.resolve(data);
    });
  }).on('error', function(err) {
    resDefer.reject(err)
  });

  return resDefer.promise;
};


module.exports =  new SpotifyManager();
