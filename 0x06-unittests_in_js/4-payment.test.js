const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let spyConsole;
  beforeEach(() => {
    spyConsole = sinon.spy(console, 'log');
  });
  afterEach(() => {
    spyConsole.restore();
  });
  it('validate the usage of the Utils function', () => {
    const stubUtils = sinon.stub(Utils, 'calculateNumber');
    stubUtils.withArgs('SUM', 100, 20).returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;
    expect(stubUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    stubUtils.restore();
  });
});
