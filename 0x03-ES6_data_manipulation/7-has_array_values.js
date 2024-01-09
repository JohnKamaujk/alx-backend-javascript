/**
 * Checks if all elements in the array exist within the set.
 * @param {Set} set - The set to check against.
 * @param {Array} array - The array to check for elements in the set.
 * @returns {boolean} - True if all elements in the array exist in the set|| false.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
