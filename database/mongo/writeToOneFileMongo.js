var fs = require('fs');
var ws = fs.createWriteStream(__dirname + "/reservation.csv");
var listingGen = require('..dataGen.js');

function writeTenMillionTimes(writer, callback) {
  let i = 1e7;
  create();
  function create() {
    let ok = true;
    do {
      if( i === 1e7 ){
        writer.write('propertyId,owner,maxGuests,nightlyRate,avgRating,minStay,serviceFeeRate,recentViews,reviewsCount,daysSinceUpdated,popular,cleaningFee,taxRate\n');
      }
      i--;
      var {
        propertyId, owner, maxGuests, nightlyRate, avgRating, 
        minStay, serviceFeeRate, recentViews, reviewsCount, 
        daysSinceUpdated, popular, cleaningFee, taxRate 
      } = listingGen(i);
      var data = `${propertyId},${owner},${maxGuests},${nightlyRate},${avgRating},${minStay},${serviceFeeRate},${recentViews},${reviewsCount},${daysSinceUpdated},${popular},${cleaningFee},${taxRate}\n`;
      if (i === 0) {
        // last time!
        writer.write(data, callback);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = writer.write(data);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', create);
    }
  }
}
var startTime = (new Date).getTime();
writeTenMillionTimes(ws, () => {
  let endTime = new Date();
  console.log(`Total Elapsed Time: ${(endTime - startTime) / 1000} seconds`);
});

// mongoimport --db reservation --collection listings --type csv --headerline --file /Users/uttej/hackreactor/Reservation-Checkout/database/mongo/reservation.csv

