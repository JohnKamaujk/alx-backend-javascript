export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  /**
   * Sets the name of currency.
   */
  set name(value) {
    if (typeof value !== "string") {
      throw new TypeError("Name must be a string");
    }
    this._name = value;
  }

  get code() {
    return this._code;
  }

  /**
   * Sets the code of airport.
   */
  set code(value) {
    if (typeof value !== "string") {
      throw new TypeError("Code must be a string");
    }
    this._code = value;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
