const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should round both numbers up and return the correct sum', () => {
    expect(calculateNumber('SUM', 1.7, 3.7)).to.equal(6); // 1.7 rounds to 2, 3.7 rounds to 4
  });

  it('should round both numbers down and return the correct sum', () => {
    expect(calculateNumber('SUM', 1.2, 3.2)).to.equal(4); // 1.2 rounds to 1, 3.2 rounds to 3
  });

  it('should round one number up and one number down and return the correct sum', () => {
    expect(calculateNumber('SUM', 1.7, 3.2)).to.equal(5); // 1.7 rounds to 2, 3.2 rounds to 3
  });

  it('should handle negative numbers correctly', () => {
    expect(calculateNumber('SUM', -1.7, 3.7)).to.equal(2); // -1.7 rounds to -2, 3.7 rounds to 4
    expect(calculateNumber('SUM', 1.7, -3.2)).to.equal(-1); // 1.7 rounds to 2, -3.2 rounds to -3
  });

  it('should handle zero correctly', () => {
    expect(calculateNumber('SUM', 0, 3.7)).to.equal(4); // 0 stays 0, 3.7 rounds to 4
    expect(calculateNumber('SUM', 1.7, 0)).to.equal(2); // 1.7 rounds to 2, 0 stays 0
  });

  it('should round both numbers up and return the correct difference', () => {
    expect(calculateNumber('SUBTRACT', 1.7, 3.7)).to.equal(-2); // 1.7 rounds to 2, 3.7 rounds to 4
  });

  it('should round both numbers down and return the correct difference', () => {
    expect(calculateNumber('SUBTRACT', 1.2, 3.2)).to.equal(-2); // 1.2 rounds to 1, 3.2 rounds to 3
  });

  it('should round one number up and one number down and return the correct difference', () => {
    expect(calculateNumber('SUBTRACT', 1.7, 3.2)).to.equal(-1); // 1.7 rounds to 2, 3.2 rounds to 3
  });

  // Test cases for DIVIDE
  describe('type == "SUBTRACT"', () => {
    it('equal positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 2.0, 2.0)).to.equal(0);
    });

    it('equal positive numbers (alternate)', () => {
      expect(calculateNumber('SUBTRACT', 2.3, 1.8)).to.equal(0);
    });

    it('equal negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -2.0, -2.0)).to.equal(0);
    });

    it('equal negative numbers (alternate)', () => {
      expect(calculateNumber('SUBTRACT', -2.3, -1.8)).to.equal(0);
    });

    it('negative and positive numbers', () => {
      expect(calculateNumber('SUBTRACT', -2.0, 2.0)).to.equal(-4.0);
    });

    it('positive and negative numbers', () => {
      expect(calculateNumber('SUBTRACT', 2.0, -2.0)).to.equal(4.0);
    });

    it('0 and 0', () => {
      expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('positive numbers', () => {
      expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4.0);
    });

    it('numbers with different signs', () => {
      expect(calculateNumber('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
    });

    it('numbers with different signs (alternate)', () => {
      expect(calculateNumber('DIVIDE', 7.0, -2.0)).to.equal(-3.5);
    });

    it('negative numbers', () => {
      expect(calculateNumber('DIVIDE', -7.0, -2.0)).to.equal(3.5);
    });

    it('equal positive numbers', () => {
      expect(calculateNumber('DIVIDE', 2.0, 2.0)).to.equal(1);
    });

    it('equal negative numbers', () => {
      expect(calculateNumber('DIVIDE', -2.0, -2.0)).to.equal(1);
    });

    it('equal rounded up numbers', () => {
      expect(calculateNumber('DIVIDE', 2.6, 3.0)).to.equal(1);
    });

    it('equal rounded down numbers', () => {
      expect(calculateNumber('DIVIDE', 2.4, 2.0)).to.equal(1);
    });

    it('0 and positive number', () => {
      expect(calculateNumber('DIVIDE', 0.0, 5.0)).to.equal(0);
    });

    it('0 and negative number', () => {
      expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(-0);
    });

    it('positive number and 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0)).to.equal('Error');
    });

    it('positive number and number rounded down to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0.2)).to.equal('Error');
    });

    it('positive number and number rounded up to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, -0.2)).to.equal('Error');
    });

    it('negative number and 0', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0)).to.equal('Error');
    });

    it('negative number and number rounded down to zero', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0.2)).to.equal('Error');
    });

    it('negative number and number rounded up to zero', () => {
      expect(calculateNumber('DIVIDE', -5.0, -0.2)).to.equal('Error');
    });

    it('0 and 0', () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
  });
});
