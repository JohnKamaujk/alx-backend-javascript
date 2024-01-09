const weakMap = new WeakMap();

/**
 * Increments the query count for the specified endpoint.
 * Throws an error if the query count is >= 5.
 * @param {Object} endpoint - The API endpoint.
 * @throws {Error} - Throws an error if the query count is >= 5.
 */
export function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;
  count += 1;

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, count);
}

export { weakMap };
