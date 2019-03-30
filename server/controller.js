const Listings = require('../database/index.js');

const controller = {
  get: (req, res) => {
    Listings.findOne({ property_id: req.params.property_id })
      .then(data => res.status(200).json(data))
      .catch(err => {
        console.log(err);
        res.status(404).send('Could not retreive property');
      });
  }
};

module.exports = controller;
