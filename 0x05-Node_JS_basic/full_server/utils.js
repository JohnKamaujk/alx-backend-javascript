const fs = require('fs').promises;

/**
 * Reads the database asynchronously and returns an object of arrays of first names per fields.
 * @param {string} filePath - The path to the database file.
 * @returns {Promise<object>} A promise that resolves with an object of
 * arrays of first names per fields or rejects with an error.
 */
const readDatabase = async (filePath) => {
  try {
    if (!filePath) {
      throw new Error('Cannot load the database');
    }
    const fileContent = await fs.readFile(filePath, 'utf-8');
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

    return studentGroups;
  } catch (error) {
    throw new Error('Cannot read the database');
  }
};

export default readDatabase;
module.exports = readDatabase;
