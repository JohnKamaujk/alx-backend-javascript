/**
 * Returns the sum of ids of a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @returns {Number}
 */
export default function getStudentIdsSum(studentsArray) {
  if (studentsArray instanceof Array) {
    return studentsArray.reduce(
      (prevSum, currStudent) => prevSum + currStudent.id,
      0,
    );
  }
  return 0;
}
