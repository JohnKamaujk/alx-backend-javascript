import calculateNumber from './0-calcul';

const assert = require('assert');

describe('calculateNumber function', () => {
  it('round two floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 7.0), 8);
  });

  it('round down the floating point fractional number of b', () => {
    assert.strictEqual(calculateNumber(1.0, 6.3), 7);
  });

  it('round down the floating point fractional numbers of both a and b', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('round down the floating point fractional number of a', () => {
    assert.strictEqual(calculateNumber(9.2, 2.0), 11);
  });

  it('round up the floating point fractional number of b', () => {
    assert.strictEqual(calculateNumber(1.0, 7.9), 9);
  });

  it('round up the floating point fractional numbers of both a and b', () => {
    assert.strictEqual(calculateNumber(5.6, 3.9), 10);
  });

  it('round up the floating point fractional number of a', () => {
    assert.strictEqual(calculateNumber(7.78, 1.0), 9);
  });

  it('round down the floating point fractional numbers of both a and b, which have trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 4.499999), 6);
  });
});
