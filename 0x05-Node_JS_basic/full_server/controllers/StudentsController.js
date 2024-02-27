import readDatabase from '../utils';

const VALID_MAJORS = ['CS', 'SWE'];

class StudentsController {
  /**
   * Students page.
   * @param {http.IncomingMessage} req - The request object.
   * @param {http.ServerResponse} res - The response object.
   */
  static async getAllStudents(request, response) {
    try {
      const dataPath = process.argv[2] || '';
      const studentGroups = await readDatabase(dataPath);
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
          `Number of students in ${field}: ${group.length}. List: ${group
            .join(', ')}`,
        );
      }
      response.status(200).send(responseParts.join('\n'));
    } catch (error) {
      response
        .status(500)
        .send(error instanceof Error ? error.message : error.toString());
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      const dataPath = process.argv[2] || '';
      const { major } = request.params;

      if (!VALID_MAJORS.includes(major)) {
        response.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      const studentGroups = await readDatabase(dataPath);
      const group = studentGroups[major] || [];

      const responseText = `List: ${group
        .join(', ')}`;
      response.status(200).send(responseText);
    } catch (error) {
      response
        .status(500)
        .send(error instanceof Error ? error.message : error.toString());
    }
  }
}

export default StudentsController;
module.exports = StudentsController;
