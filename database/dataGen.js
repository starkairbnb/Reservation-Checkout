const data = [];
const faker = require('faker');

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

const listingGen = id => {
  let listing = {};

  listing.propertyId = id;
  listing.owner = faker.name.firstName();
  listing.maxGuests = getRandomIntInclusive(1, 10);
  listing.nightlyRate = listing.maxGuests * (getRandomIntInclusive(0, 20) + 25);
  listing.avgRating = getRandomIntInclusive(0, 1) / 2 + 4.5;
  listing.minStay = getRandomIntInclusive(1, 4);
  listing.serviceFeeRate = getRandomIntInclusive(10, 15) / 100;
  listing.recentViews = getRandomIntInclusive(0, 600);
  listing.reviewsCount = getRandomIntInclusive(0, 25);
  listing.daysSinceUpdated = getRandomIntInclusive(0, 40);

  if (Math.random() >= 0.5) {
    listing.popular = true;
  } else {
    listing.popular = false;
  }

  if (Math.random() >= 0.5) {
    let cleaningVar = listing.maxGuests * getRandomIntInclusive(10, 20);
    listing.cleaningFee = cleaningVar;
  } else {
    listing.cleaningFee = null;
  }

  if (Math.random() >= 0.5) {
    listing.taxRate = getRandomIntInclusive(5, 10) / 100;
  } else {
    listing.taxRate = null;
  }

  return listing;
};

for (let i = 1; i <= 100; i -= -1) {
  //gottem
  data.push(listingGen(i));
}

module.exports = data;
