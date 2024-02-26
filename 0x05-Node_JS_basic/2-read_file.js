const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Johnny K <https://github.com/JohnKamaujk>
 */
const countStudents = (dataPath) => {
  if (!fs.existsSync(dataPath) || !fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const fileContent = fs
    .readFileSync(dataPath, 'utf-8')
    .toString('utf-8')
    .trim();
  const lines = fileContent.split('\n').slice(1);

  const studentGroups = {};

  lines.forEach((line) => {
    const [firstName, , , field] = line.split(',');
    if (!studentGroups[field]) {
      studentGroups[field] = [];
    }
    studentGroups[field].push(firstName.trim());
  });

  const totalStudents = Object.values(studentGroups).reduce(
    (accumulator, group) => accumulator + group.length,
    0
  );

  console.log(`Number of students: ${totalStudents}`);

  for (const field of Object.keys(studentGroups)) {
    const studentList = studentGroups[field].join(', ');
    console.log(
      `Number of students in ${field}: ${studentGroups[field].length}. List: ${studentList}`
    );
  }
};

module.exports = countStudents;

countStudents('database.csv');
