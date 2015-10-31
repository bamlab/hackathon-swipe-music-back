var request = require('supertest');

describe('hapi', function() {
  it('server alive', function(done) {
    request('localhost:3000').get('/')
      .expect(200)
      .end(done);
  });
});
