const request = require('request');
const chai = require('chai');

const expect = chai.expect;

describe('API test', () => {
  it('GET request to the index / endpoint', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET request to the /cart/:id endpoint', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('POST /login returns valid response', (done) => {
    request.post(
      'http://localhost:7865',
      { json: { userName: 'Pinkbrook' } },
      (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome Pinkbrook');
        done();
      }
    );
  });

  it('GET /available_payments returns valid response', (done) => {
    request.get(
      'http://localhost:7865/available_payments',
      (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(JSON.parse(body)).to.be.deep.equal({
          payment_methods: { credit_cards: true, paypal: false },
        });
        done();
      }
    );
  });
});
