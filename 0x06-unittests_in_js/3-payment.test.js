import sendPaymentRequestToApi from './3-payment';
import Utils from './utils';

const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.callCount).to.be.equal(1);
    expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;
    calculateNumberSpy.restore();
  });
});
