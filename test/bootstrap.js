var server = require('../app/server');

/**
 * global hook which load the app
 */
before(function() {
  server.connection({ port: 3000 });
  server.start(function () {});
});

after(function() {
  server.stop(function(err) {

  });
});
