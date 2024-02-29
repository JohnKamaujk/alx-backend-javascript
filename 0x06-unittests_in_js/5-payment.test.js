import sendPaymentRequestToAPI from './5-payment';

const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToAPI', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('logs "The total is: 120" and be called once when called with 100 and 20', () => {
    sendPaymentRequestToAPI(100, 20);

    expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
    expect(consoleLogSpy.calledOnce).to.be.true;
  });

  it('logs "The total is: 20" and be called once when called with 10 and 10', () => {
    sendPaymentRequestToAPI(10, 10);

    expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;
    expect(consoleLogSpy.calledOnce).to.be.true;
  });
});
