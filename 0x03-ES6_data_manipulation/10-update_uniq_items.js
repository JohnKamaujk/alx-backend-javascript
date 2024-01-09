/**
 * Updates the quantity to 100 for all items with an initial quantity of 1 in the map.
 * @param {Map} map - The map to update.
 * @throws {Error} - Throws an error if the argument is not a map.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
