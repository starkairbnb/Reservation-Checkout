const db = require('../database/index.js');

const controller = {
  get: (req, res) => {
    res.status(200).send('test')
  }
}

module.exports = controller;