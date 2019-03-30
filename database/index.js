const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reservation', { useNewUrlParser: true });

const Schema = mongoose.Schema;

const listingSchema = new Schema({
  property_id: Number,
  owner: String,
  max_guests: Number,
  nightly_rate: Number,
  avg_rating: Number,
  min_stay: Number,
  service_fee_rate: Number,
  recent_views: Number,
  popular: Boolean,
  cleaning_fee: Number,
  tax_rate: Number
});

const Listings = mongoose.model('Listing', listingSchema);

module.exports = Listings;
