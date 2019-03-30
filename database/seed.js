const db = require('./index.js');
const mongoose = require('mongoose');
const data = require('./dataGen.js');

const seed = dataArr => {
  db.insertMany(dataArr)
    .then(() => mongoose.connection.close())
    .catch(err => console.log(err));
};

seed(data);
