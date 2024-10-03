class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  set code(myCode) {
    this._code = myCode;
  }

  get code() {
    return this._code;
  }

  set name(newName) {
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
