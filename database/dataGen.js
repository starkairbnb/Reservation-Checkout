const data = [];
const faker = require('faker');

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

const listingGen = id => {
  let listing = {};

  listing.property_id = id;
  listing.owner = faker.name.firstName();
  listing.max_guests = getRandomIntInclusive(1, 10);
  listing.nightly_rate =
    listing.max_guests * (getRandomIntInclusive(0, 20) + 25);
  listing.avg_rating = getRandomIntInclusive(0, 2) / 2 + 4;
  listing.min_stay = getRandomIntInclusive(1, 4);
  listing.service_fee_rate = getRandomIntInclusive(15, 20) / 100;
  listing.recent_views = getRandomIntInclusive(0, 600);
  listing.reviews_count = getRandomIntInclusive(0, 25);
  listing.days_since_updated = getRandomIntInclusive(0, 40);

  if (Math.random() >= 0.5) {
    listing.popular = true;
  } else {
    listing.popular = false;
  }

  if (Math.random() >= 0.5) {
    listing.cleaning_fee = listing.max_guests * getRandomIntInclusive(10, 20);
  } else {
    listing.cleaning_fee = null;
  }

  if (Math.random() >= 0.5) {
    listing.tax_rate = getRandomIntInclusive(5, 10) / 100;
  } else {
    listing.tax_rate = null;
  }

  return listing;
};

for (let i = 1; i <= 100; i -= -1) {
  //gottem
  data.push(listingGen(i));
}

module.exports = data;
