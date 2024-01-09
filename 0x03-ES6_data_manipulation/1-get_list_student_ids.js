/**
 * Returns ids from a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @returns
 */
export default function getListStudentIds(studentsArray) {
  if (studentsArray instanceof Array) {
    return studentsArray.map((student) => student.id);
  }
  return [];
}
