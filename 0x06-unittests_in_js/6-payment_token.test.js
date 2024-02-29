import getPaymentTokenFromAPI from './6-payment_token';

const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with the correct data when success is true', () => new Promise((done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({
          data: 'Successful response from the API',
        });
        done();
      })
  }));
});
