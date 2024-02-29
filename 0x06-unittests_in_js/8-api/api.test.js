const request = require('request');
const { expect } = require('chai');

const API_URL = 'http://localhost:7865';

describe('index page', () => {
  it('should return correct status code', () => new Promise((done) => {
    request.get(API_URL, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  }));

  it('should return correct result', () => new Promise((done) => {
    request.get(API_URL, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));
});
