/**
 * Represents Building class.
 */
export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  /**
   * @returns {Number}
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * @param {Number} value
   */
  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = value;
  }
}
