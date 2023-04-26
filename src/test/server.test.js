const app = require('../server');
const request = require('supertest');

describe('API Test', () => {
  afterEach(function (done) {
    app.close(done);
  });

  it('Should return template literal in the GET Call', (done) => {
    request(app).get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .end((error) => {
        if (error) throw done(error);
        done();
      });
  });
});