const fs = require('fs').promises;
const http = require('http');

/**
 * Counts the students in a CSV data file asynchronously.
 * @param {string} dataPath - The path to the CSV data file.
 * @returns {Promise<string>} A Promise that resolves with the strings representing the student counts or rejects with an error.
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
      0
    );

    let result = `Number of students: ${totalStudents}\n`;

    for (const field of Object.keys(studentGroups)) {
      const studentList = studentGroups[field].join(', ');
      result += `Number of students in ${field}: ${studentGroups[field].length}. List: ${studentList}\n`;
    }
    return result.trim(); // Return the constructed string
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

const app = http.createServer((req, res) => {
  // Set response headers
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    // For root path, display "Hello Holberton School!"
    const responseText = 'Hello Holberton School!\n';
    res.setHeader('Content-Length', Buffer.byteLength(responseText));
    res.statusCode = 200;
    res.end(responseText);
  } else if (req.url === '/students') {
    // For /students path, display student list
    const databasePath = process.argv[2];
    countStudents(databasePath)
      .then((responseData) => {
        const responseText = 'This is the list of our students\n' + responseData;
        res.statusCode = 200;
        res.setHeader('Content-Length', Buffer.byteLength(responseText));
        res.end(responseText);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end('Internal Server Error');
        console.error(error);
      });
  } else {
    // For other paths, return 404 Not Found
    const responseText = 'Not Found';
    res.setHeader('Content-Length', Buffer.byteLength(responseText));
    res.statusCode = 404;
    res.end(responseText);
  }
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

module.exports = app;
