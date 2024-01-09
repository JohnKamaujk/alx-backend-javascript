/**
 * Joins a set of strings with a dash after stripping the strings of
 * a leading sub string.
 * @param {Set<String>} set - A collection of strings.
 * @param {String} startString - The string to strip from the beginning
 * of each item in the set.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @returns {String}
 */
export default function cleanSet(set, startString) {
  if (
    !set
    || !startString
    || !(set instanceof Set)
    || typeof startString !== 'string'
  ) {
    return '';
  }

  const parts = Array.from(set)
    .filter(
      (value) => typeof value === 'string'
        && value.startsWith(startString)
        && value !== startString,
    )
    .map((value) => {
      const valueSubStr = value.substring(startString.length);
      return valueSubStr;
    });

  return parts.join('-');
}
