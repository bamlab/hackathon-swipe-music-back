
var UserRepository = function() {
  this.users = {};
};

UserRepository.prototype.persist = function(user) {
  this.users[user.getId()] = user;
};

UserRepository.prototype.findById = function(id) {
  return this.users[id];
};


UserRepository.prototype.findByUsername = function (username) {

  var user;
  for (var i in this.users) {
    user = this.users[i];
    if (user.getUsername() === username) {
      return user;
    }
  }

  return null;
};

UserRepository.prototype.findByToken = function (token) {

  var user;
  for (var i in this.users) {
    user = this.users[i];
    if (user.checkToken(token)) {
      return user;
    }
  }

  return null;
};

module.exports = new UserRepository();
