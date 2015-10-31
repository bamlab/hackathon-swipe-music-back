var userFactory = require('../domain/model/user.model');
var userRepository = require('../domain/repository/user.repository');

var UserController = function() {};

UserController.prototype.login = function login(request, reply) {

  var username = request.params.username;
  var artist = request.payload.artist;

  var user = userRepository.findByUsername(username);
  if (! user) {
    user = userFactory(username, null);
  }
  user.setFirstArtist(artist);

  userRepository.persist(user);
  reply(user);
};

module.exports = new UserController();
