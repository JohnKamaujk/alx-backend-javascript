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

describe('cart page', () => {
  it('should return correct status code when :id is a number', () => new Promise((done) => {
    request.get(`${API_URL}/cart/12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  }));

  it('should return correct result when :id is a number', () => new Promise((done) => {
    request.get(`${API_URL}/cart/12`, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  }));

  it('should return status code 404 when :id is NOT a number', () => new Promise((done) => {
    request.get(`${API_URL}/cart/hello`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  }));

  it('should return "Not Found" message when :id is NOT a number', () => new Promise((done) => {
    request.get(`${API_URL}/cart/hello`, (error, response, body) => {
      expect(body).to.equal('Not Found');
      done();
    });
  }));
});
