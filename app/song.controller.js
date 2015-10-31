var userRepository = require('../domain/repository/user.repository');
var spotifyManager = require('../components/spotify/spotify.manager');

var SongController = function() {};

SongController.prototype.getSongs = function getSongs(request, reply) {

  var id = request.params.userId;
  var user = userRepository.findById(id);
  if (! user) {
    reply().code(404);
    return;
  }

  spotifyManager.getRelatedSongs(user.getFirstArtist(), 20)
  .then(function (songs) {
    reply(songs);
  }, function(err) {
      reply(err).code(400);
  });
};

module.exports = new SongController();
