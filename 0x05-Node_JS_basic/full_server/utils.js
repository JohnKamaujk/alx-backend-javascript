import { promises as fs } from 'fs';

/**
 * Reads the data of students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Johnny K <https://github.com/JohnKamaujk>
 * @returns {Promise<{ [fieldName: string]: string[] }>} Object containing arrays
 * of first names per field.
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

      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const firstName = studentRecord[0]; // First column contains first names
        const field = studentRecord[studentRecord.length - 1];

        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }
        studentGroups[field].push(firstName);
      }
      resolve(studentGroups);
    })
    .catch(() => {
      reject(new Error('Cannot load the database'));
    });
});

export default readDatabase;
