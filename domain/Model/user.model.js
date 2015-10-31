
var User = function (username, password) {
  this.username = null;
  this.password = null;
};

User.prototype.getUsername = function () {
  return this.username;
};

User.prototype.setUsername = function (username) {
  this.username = username;
  return this;
};

User.prototype.getPassword = function () {
  return this.password;
};

User.prototype.setPassword = function (password) {
  this.password = password;
  return this;
};

User.prototype.checkPassword = function (password) {
  return this.password === password;
};

module.exports = function (username, password) {
  return new User(username, passord);
};

module.exports.prototype = User;
