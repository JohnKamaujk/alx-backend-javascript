class AppController {
  /**
   * Get homepage.
   * @param {http.IncomingMessage} req - The request object.
   * @param {http.ServerResponse} res - The response object.
   */
  static getHomepage(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  }
}

module.exports = AppController;
