const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;
mongoose.connect('mongodb://127.0.0.1:27017/reservation', {
  useNewUrlParser: true
});

const Schema = mongoose.Schema;

const listingSchema = new Schema({
  propertyId: Number,
  owner: String,
  maxGuests: Number,
  nightlyRate: Number,
  avgRating: Number,
  minStay: Number,
  serviceFeeRate: Number,
  recentViews: Number,
  popular: Boolean,
  cleaningFee: Number,
  taxRate: Number,
  reviewsCount: Number,
  listing: Number,
  daysSinceUpdated: Number
});

const Listings = mongoose.model('Listing', listingSchema);

module.exports = Listings;
