import sendPaymentRequestToApi from './3-payment';
import Utils from './utils';

const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const consoleLogSpy = sinon.spy(console, 'log');
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');

    calculateNumberStub.returns(10);
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumberStub.callCount).to.equal(1);

    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
    expect(consoleLogSpy.callCount).to.equal(1);

    // Clean up
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
