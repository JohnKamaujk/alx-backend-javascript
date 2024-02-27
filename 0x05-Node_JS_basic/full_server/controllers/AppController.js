class AppController {
  /**
   * Get homepage.
   * @param {http.IncomingMessage} req - The request object.
   * @param {http.ServerResponse} res - The response object.
   */
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
