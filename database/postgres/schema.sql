CREATE TABLE listings (
  propertyId SERIAL UNIQUE,
  owner VARCHAR(30),
  maxGuests INT,
  nightlyRate INT,
  avgRating NUMERIC,
  minStay INT,
  serviceFeeRate NUMERIC,
  recentViews INT,
  reviewsCount INT,
  daysSinceUpdated NUMERIC,
  popular BOOLEAN,
  cleaningFee INT,
  taxRate NUMERIC
);

COPY listings FROM '/Users/uttej/hackreactor/Reservation-Checkout/database/postgres/reservation.csv' delimiter ',' csv header;

-- \i /Users/uttej/hackreactor/Reservation-Checkout/database/postgres/schema.sql
