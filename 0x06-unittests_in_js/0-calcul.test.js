import calculateNumber from './0-calcul';

const assert = require('assert');

describe('calculateNumber function', () => {
  it('round two floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('round down the floating point fractional number of b', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('round down the floating point fractional numbers of both a and b', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('round down the floating point fractional number of a', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('round up the floating point fractional number of b', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('round up the floating point fractional numbers of both a and b', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('round up the floating point fractional number of a', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('round down the floating point fractional numbers of both a and b, which have trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
