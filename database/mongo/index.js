const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/reservation', {
  useNewUrlParser: true
});

const Schema = mongoose.Schema;

const listingSchema = new Schema({
  propertyId: { type: Number, index: true },
  owner: { type: String },
  maxGuests: { type: Number },
  nightlyRate: { type: Number },
  avgRating: { type: Number },
  minStay: { type: Number },
  serviceFeeRate: { type: Number },
  recentViews: { type: Number },
  popular: { type: Boolean },
  cleaningFee: { type: Number },
  taxRate: { type: Number },
  reviewsCount: { type: Number },
  listing: { type: Number },
  daysSinceUpdated: { type: Number }
});

const Listings = mongoose.model('Listing', listingSchema);

module.exports = Listings;
