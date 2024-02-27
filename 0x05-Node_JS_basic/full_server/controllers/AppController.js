/**
 * Contains the miscellaneous route handlers.
 * @param {http.IncomingMessage} req - The request object.
 * @param {http.ServerResponse} res - The response object
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
