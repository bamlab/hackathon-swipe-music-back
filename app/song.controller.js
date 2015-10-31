var userFactory = require('../domain/model/user.model');
var userRepository = require('../domain/repository/user.repository');

var SongController = function() {};

SongController.prototype.getSongs = function getSongs(request, reply) {

  var id = request.params.userId;
  var user = userRepository.findById(id);


  reply(user);
};

module.exports = new SongController();
