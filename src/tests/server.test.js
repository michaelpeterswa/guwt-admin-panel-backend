var request = require('supertest');
var app = require('../server.js');

describe('GET /', function() {
    it('main webpage responds with html and status 200', function(done) {
    request(app)
        .get('/')
        .expect('Content-Type', /html/)
        .expect(200, done);
    });
});