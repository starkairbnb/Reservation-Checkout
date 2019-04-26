const pool = require('./index.js');

const getItemHelper = (req) => {
  const { propertyId } = req.params;
  return pool.query('SELECT * FROM listings WHERE propertyId = $1', [propertyId]);
};

const addItemHelper = (req) => {
  const { propertyId, owner, maxGuests, nightlyRate, avgRating, minStay, serviceFeeRate, recentViews, reviewsCount, daysSinceUpdated, popular, cleaningFee, taxRate } = req.body;
  return pool.query('INSERT INTO listings (propertyId, owner, maxGuests, nightlyRate, avgRating, minStay, serviceFeeRate, recentViews, reviewsCount, daysSinceUpdated, popular, cleaningFee, taxRate) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)', [propertyId, owner, maxGuests, nightlyRate, avgRating, minStay, serviceFeeRate, recentViews, reviewsCount, daysSinceUpdated, popular, cleaningFee, taxRate])
};

const updateItemHelper = (req) => {
  const { propertyId } = req.params;
  const { owner, maxGuests, nightlyRate, avgRating, minStay, serviceFeeRate, recentViews, reviewsCount, daysSinceUpdated, popular, cleaningFee, taxRate } = req.body;
  return pool.query('UPDATE listings SET owner = $2, maxGuests = $3, nightlyRate = $4, avgRating = $5, minStay = $6, serviceFeeRate = $7, recentViews = $8, reviewsCount = $9, daysSinceUpdated = $10, popular = $11, cleaningFee = $12, taxRate = $13 WHERE propertyId = $1', [propertyId, owner, maxGuests, nightlyRate, avgRating, minStay, serviceFeeRate, recentViews, reviewsCount, daysSinceUpdated, popular, cleaningFee, taxRate]);
};

const removeItemHelper = (req) => {
  const { propertyId } = req.params;
  return pool.query('DELETE FROM listings WHERE propertyId = $1', [propertyId]);
};

module.exports = {
  getItemHelper,
  addItemHelper,
  updateItemHelper,
  removeItemHelper
};
