const fs = require('fs');

const countStudents = (dataPath) => {
  try {
    const fileContent = fs.readFileSync(dataPath, 'utf-8');
    const lines = fileContent.trim().split('\n').slice(1);
    const studentCounts = {};

    lines.forEach((line) => {
      const [firstName, , , field] = line.split(',');
      const trimmedField = field.trim();

      if (trimmedField) {
        if (!studentCounts[trimmedField]) {
          studentCounts[trimmedField] = [];
        }
        studentCounts[trimmedField].push(firstName.trim());
      }
    });

    const totalStudents = Object.values(studentCounts).reduce(
      (acc, curr) => acc + curr.length,
      0
    );
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, students] of Object.entries(studentCounts)) {
      console.log(
        `Number of students in ${field}: ${
          students.length
        }. List: ${students.join(', ')}`
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
