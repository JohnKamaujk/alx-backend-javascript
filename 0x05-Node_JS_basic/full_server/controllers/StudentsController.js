import readDatabase from '../utils';
/**
 * The list of supported majors.
 */
const VALID_MAJORS = ['CS', 'SWE'];

/**
 * Contains the student-related route handlers.
 * @author Johnny K <https://github.com/JohnKamaujk>
 */
class StudentsController {
  static getAllStudents(request, response) {
    const dataPath = process.argv[2] || '';

    readDatabase(dataPath)
      .then((studentGroups) => {
        const cmpFxn = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };

        const sortedGroups = Object.entries(studentGroups).sort(cmpFxn);

        const responseParts = ['This is the list of our students'];

        for (const [field, group] of sortedGroups) {
          responseParts.push(
            `Number of students in ${field}: ${
              group.length
            }. List: ${group.join(', ')}`,
          );
        }
        response.status(200).send(responseParts.join('\n'));
      })
      .catch((error) => {
        response
          .status(500)
          .send(error instanceof Error ? error.message : error.toString());
      });
  }

  static getAllStudentsByMajor(request, response) {
    const dataPath = process.argv[2] || '';
    const { major } = request.params;

    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(dataPath)
      .then((studentGroups) => {
        let responseText = '';

        if (Object.keys(studentGroups).includes(major)) {
          const group = studentGroups[major];
          responseText = `List: ${group.join(', ')}`;
        }

        response.status(200).send(responseText);
      })
      .catch((error) => {
        response
          .status(500)
          .send(error instanceof Error ? error.message : error.toString());
      });
  }
}

export default StudentsController;
