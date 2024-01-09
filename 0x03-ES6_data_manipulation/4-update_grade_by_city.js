/**
 * Updates the grade of students for a specific city.
 * @param {Object[]} students - The list of students.
 * @param {string} city - The city to filter students by.
 * @param {Object[]} newGrades - The array of new grades.
 * @returns {Object[]} - An array of updated students with grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchedGrade = newGrades.find(
        (grade) => grade.studentId === student.id,
      );

      return {
        ...student,
        grade: matchedGrade ? matchedGrade.grade : 'N/A',
      };
    });
}
