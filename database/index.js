var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var Schema = mongoose.Schema;

var blurbSchema = new Schema({
  description1: String,
  description2:  String,
  imgUrl: String
});

var Blurb = mongoose.model('Blurb', blurbSchema);

module.exports = Blurb;

// This is a rare find. 
// ${name}'s place is usually booked.
// https://a0.muscache.com/airbnb/static/page3/icon-uc-diamond-86ef3d6403e5b6747d1e3a97ed840b6d.gif

// This home is on people’s minds.
// It’s been viewed 500+ times in the past week.
// https://a0.muscache.com/airbnb/static/page3/icon-uc-light-bulb-b34f4ddc543809b3144949c9e8cfcc8d.gif