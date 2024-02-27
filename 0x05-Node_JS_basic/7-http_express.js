const express = require('express');
const fs = require('fs').promises;

const PORT = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';
const app = express();

const countStudents = async (dataPath) => {
  try {
    if (!dataPath) {
      throw new Error('Cannot load the database');
    }
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

    const reportParts = [];
    const totalStudents = Object.values(studentGroups).reduce(
      (acc, curr) => acc + curr.length,
      0,
    );
    reportParts.push(`Number of students: ${totalStudents}`);
    for (const [field, group] of Object.entries(studentGroups)) {
      reportParts.push(
        `Number of students in ${field}: ${group.length}. List: ${group.join(
          ', ',
        )}`,
      );
    }
    return reportParts.join('\n');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const response = ['This is the list of our students'];

  countStudents(DB_FILE)
    .then((report) => {
      response.push(report);
      const responseText = response.join('\n');
      res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Length': Buffer.byteLength(responseText),
      });
      res.write(Buffer.from(responseText));
    })
    .catch((error) => {
      response.push(error instanceof Error ? error.message : error.toString());
      const responseText = response.join('\n');
      res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Length': Buffer.byteLength(responseText),
      });
      res.write(Buffer.from(responseText));
    });
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}\n`);
});

module.exports = app;
