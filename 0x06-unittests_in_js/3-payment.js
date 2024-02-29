import { calculateNumber } from './utils';

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const sum = calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${sum}`);
};

module.exports = sendPaymentRequestToApi;
