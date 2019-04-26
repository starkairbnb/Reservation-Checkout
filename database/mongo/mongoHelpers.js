const Listings = require('./index.js');

const getItemHelper = (req) => {
  let { propertyId } = req.params;
  return Listings.findOne({ propertyId });
};

const addItemHelper = (req) => {
  let { propertyId, owner, maxGuests, nightlyRate, avgRating, minStay, serviceFeeRate, recentViews, reviewsCount, daysSinceUpdated, popular, cleaningFee, taxRate } = req.body;
  return Listings.create({ propertyId, owner, maxGuests, nightlyRate, avgRating, minStay, serviceFeeRate, recentViews, reviewsCount, daysSinceUpdated, popular, cleaningFee, taxRate });
};

const updateItemHelper = (req) => {
  let { propertyId, owner, maxGuests, nightlyRate, avgRating, minStay, serviceFeeRate, recentViews, reviewsCount, daysSinceUpdated, popular, cleaningFee, taxRate } = req.body;
  return Listings.findOneAndUpdate({ propertyId, owner, maxGuests, nightlyRate, avgRating, minStay, serviceFeeRate, recentViews, reviewsCount, daysSinceUpdated, popular, cleaningFee, taxRate });
};

const removeItemHelper = (req) => {
  let { propertyId } = req.params;
  return Listings.remove({ propertyId });
}

module.exports = {
  getItemHelper,
  addItemHelper,
  updateItemHelper,
  removeItemHelper
}
