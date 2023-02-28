const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Mock API Test', function() {
  it('should return an access token for valid login credentials', function(done) {
    chai.request('https://reqres.in/api')
      .post('/login')
      .send({ email: 'eve.holt@reqres.in', password: 'cityslicka' })
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('token');
        done();
      });
  });

  it('should return an error message for invalid login credentials', function(done) {
    chai.request('https://reqres.in/api')
      .post('/login')
      .send({ email: 'sydney@fife', password: 'pistol' })
      .end(function(err, res) {
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('error');
        done();
      });
  });
});
