var server = require('./app/server');

server.start(function () {
  console.log('Server running at:', server.info.uri);
});
