/**
 * Represents Currency class.
 */
export default class Currency {
  /**
   *
   * @param {String} code - currency code symbol.
   * @param {String} name - currency name.
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * Gets the code of code.
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the code of currency.
   */
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  /**
   * Gets the name of currency
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of currency.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * full string representation of Currency.
   * @returns {String}
   */
  displayFullCurrency() {
    return `${this.name}(${this.code})`;
  }
}
