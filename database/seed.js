const db = require('./index.js');
const mongoose = require('mongoose');
const data = require('./data.json');

const seed = (data) => {
  for (let blurb of data) {
    const { description1, description2, imgUrl } = blurb
    db.create({ description1, description2, imgUrl })
    .then(() => mongoose.connection.close())
    .catch((err) => console.error(err));
  }
}

seed(data);