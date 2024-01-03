export default function appendToEachArrayValue(array, appendString) {
  const arrayDup = [];
  for (const element of array) {
    arrayDup.push(appendString + element);
  }

  return arrayDup;
}
