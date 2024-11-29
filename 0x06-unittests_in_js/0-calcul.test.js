// 0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the correct sum for integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round and return the sum for one decimal number', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should round and return the sum for two decimal numbers', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should round and return the sum for two decimal numbers', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should round the second number and return the correct sum', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5); // 3.7 rounds to 4
    assert.strictEqual(calculateNumber(1, 3.2), 4); // 3.2 rounds to 3
  });
});
