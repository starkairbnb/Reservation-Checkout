const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reservation', {useNewUrlParser: true});

const Schema = mongoose.Schema;

const blurbSchema = new Schema({
  description1: String,
  description2:  String,
  imgUrl: String
});

const Blurb = mongoose.model('Blurb', blurbSchema);

module.exports = Blurb;
