const dbHelpers = require('../database/mongo/mongoHelpers.js');
// const dbHelpers = require('../database/postgres/postgresHelper.js');
//when using postgres need to change data to data.rows[0] for GET request

const controller = {
  get: (req, res) => {
    dbHelpers.getItemHelper(req, res)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(err => {
        console.log(err);
        res.status(404).send('Could not retrieve property');
      });
  },
  post: (req, res) => {
    dbHelpers.addItemHelper(req, res)
      .then(() => {
        res.status(201).send('Posted!');
      })
      .catch(err => {
        console.log(err);
        res.status(404).send('Could not retrieve property');
      });
  },
  update: (req, res) => {
    dbHelpers.updateItemHelper(req, res)
      .then(() => {
        res.status(203).send('Updated!');
      })
      .catch(err => {
        console.log(err);
        res.status(404).send('Could not retrieve property');
      });
  },
  delete: (req, res) => {
    dbHelpers.removeItemHelper(req, res)
      .then(() => {
        res.status(202).send('Deleted!');
      })
      .catch(err => {
        console.log(err);
        res.status(404).send('Could not retrieve property');
      });
  },
};

module.exports = controller;

