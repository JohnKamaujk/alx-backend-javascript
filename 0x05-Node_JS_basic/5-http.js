const http = require("http");
const fs = require("fs").promises;

const PORT = 1245;
const HOST = "localhost";

const countStudents = async (dataPath) => {
  try {
    if (!dataPath) {
      throw new Error("Cannot load the database");
    }
    const fileContent = await fs.readFile(dataPath, "utf-8");
    const lines = fileContent.trim().split("\n").slice(1);

    const studentGroups = {};

    lines.forEach((line) => {
      const [firstName, , , field] = line.split(",");
      if (field.trim() !== "") {
        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }
        studentGroups[field].push(firstName.trim());
      }
    });

    const reportParts = [];
    const totalStudents = Object.values(studentGroups).reduce(
      (acc, curr) => acc + curr.length,
      0
    );
    reportParts.push(`Number of students: ${totalStudents}`);
    for (const [field, group] of Object.entries(studentGroups)) {
      reportParts.push(
        `Number of students in ${field}: ${group.length}. List: ${group.join(
          ", "
        )}`
      );
    }
    return reportParts.join("\n");
  } catch (error) {
    throw new Error("Cannot load the database");
  }
};

const app = http.createServer((req, res) => {
  const { url } = req;

  if (url === "/") {
    const responseText = "Hello Holberton School!";
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Content-Length", responseText.length);
    res.statusCode = 200;
    res.end(responseText);
  } else if (url === "/students") {
    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 200;
    res.write("This is the list of our students\n");
    countStudents(process.argv[2])
      .then((report) => {
        res.end(report);
      })
      .catch((error) => {
        res.end("Error: Unable to retrieve student data");
        console.error(error);
      });
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running and listening on http://${HOST}:${PORT}`);
});

module.exports = app;
