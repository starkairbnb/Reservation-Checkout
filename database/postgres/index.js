const pg = require('pg');

const connectionString = 'postgresql://localhost:5432/reservation';

const pool = new pg.Pool({ connectionString });

pool 
  .query("CREATE TABLE listings (propertyId SERIAL UNIQUE, owner VARCHAR(30), maxGuests INT, nightlyRate INT, avgRating NUMERIC, minStay INT, serviceFeeRate NUMERIC, recentViews INT, reviewsCount INT, daysSinceUpdated NUMERIC, popular BOOLEAN, cleaningFee INT, taxRate NUMERIC)")
  .then(data => console.log('table created', data))
  .then(() => 
    pool.query(
      "COPY listings FROM '/Users/uttej/hackreactor/Reservation-Checkout/database/postgres/reservation.csv' delimiter ',' csv header"
    )
  )
  .catch(err => console.log(err));

module.exports = pool;
