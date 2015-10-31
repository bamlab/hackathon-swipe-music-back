var https = require('http');
var Q = require('q');


var SpotifyManager = function() {};

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
