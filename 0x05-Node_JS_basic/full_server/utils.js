import { promises as fs } from 'fs';

/**
 * Reads the data of students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Johnny K <https://github.com/JohnKamaujk>
 * @returns {Promise<{
 *   String: {firstname: String, lastname: String, age: number}[]
 * }>}
 */
const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(dataPath, 'utf-8')
    .then((data) => {
      const fileLines = data.trim().split('\n');
      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(
          0,
          studentRecord.length - 1,
        );
        const field = studentRecord[studentRecord.length - 1];
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }
        const studentEntries = studentPropNames.map((propName, idx) => [
          propName,
          studentPropValues[idx],
        ]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }
      resolve(studentGroups);
    })
    .catch(() => {
      reject(new Error('Cannot load the database'));
    });
});

export default readDatabase;
