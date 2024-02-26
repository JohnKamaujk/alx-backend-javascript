const fs = require('fs').promises;

/**
 * Counts the students in a CSV data file asynchronously.
 * @param {string} dataPath - The path to the CSV data file.
 * @returns {Promise<void>} A Promise that resolves when the counting is done or
 * rejects with an error.
 */
const countStudents = async (dataPath) => {
  try {
    // Read the file asynchronously
    const fileContent = await fs.readFile(dataPath, 'utf-8');
    const lines = fileContent.trim().split('\n').slice(1);

    const studentGroups = {};

    lines.forEach((line) => {
      const [firstName, , , field] = line.split(',');
      if (field.trim() !== '') {
        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }
        studentGroups[field].push(firstName.trim());
      }
    });

    const totalStudents = Object.values(studentGroups).reduce(
      (acc, group) => acc + group.length,
      0,
    );
    console.log(`Number of students: ${totalStudents}`);

    for (const field of Object.keys(studentGroups)) {
      const studentList = studentGroups[field].join(', ');
      console.log(
        `Number of students in ${field}: ${studentGroups[field].length}. List: ${studentList}`,
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
