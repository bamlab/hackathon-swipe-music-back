
var User = function (username, password) {
  this.id = parseInt(Math.random() * 10000);
  this.username = username;
  this.password = password;
  this.token = (Math.random() * Math.pow(2, 64)).toString(16);
  this.firstArtist = null;
}
;
User.prototype.getId = function () {
  return this.id;
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

User.prototype.getToken = function () {
  return this.token;
};

User.prototype.setToken = function (token) {
  this.token = token;
  return this;
};

User.prototype.checkToken = function (token) {
  return this.token === token;
};


User.prototype.getFirstArtist = function () {
  return this.firstArtist;
};

User.prototype.setFirstArtist = function (firstArtist) {
  this.firstArtist = firstArtist;
  return this;
};

module.exports = function (username, password) {
  return new User(username, password);
};

module.exports.prototype = User;
