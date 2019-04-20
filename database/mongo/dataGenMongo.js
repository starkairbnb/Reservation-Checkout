//This file creates 10mil sets of fake data and the commands at the end of the page use mongoimport to write to mongodb
const data = require('../dataGen.js');
var faker = require("faker");
var fs = require('fs');

var ten_million = 1000000;
var start = 1;
var stop = ten_million;

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

for (var i = 1; i <= 10; i++){
  writeInfoData(start, stop);
  function writeInfoData(start, stop){
    var header = 'propertyId,owner,maxGuests,nightlyRate,avgRating,minStay,serviceFeeRate,recentViews,reviewsCount,daysSinceUpdated,popular,cleaningFee,taxRate\n';
    var data = header;
    for (var j = start; j <= stop; j++){
      if (j % 1000000 === 0) { console.log('j: ', j) }
      var propertyId = j;
      var owner = faker.name.firstName();
      var maxGuests = getRandomIntInclusive(1, 10);
      var nightlyRate = maxGuests * (getRandomIntInclusive(0, 20) + 25);
      var avgRating = getRandomIntInclusive(0, 1) / 2 + 4.5;
      var minStay = getRandomIntInclusive(1, 4);
      var serviceFeeRate = getRandomIntInclusive(10, 15) / 100;
      var recentViews = getRandomIntInclusive(0, 600);
      var reviewsCount = getRandomIntInclusive(0, 25);
      var daysSinceUpdated = getRandomIntInclusive(0, 40);

      if (Math.random() >= 0.5) {
        var popular = true;
      } else {
        var popular = false;
      }
    
      if (Math.random() >= 0.5) {
        let cleaningVar = maxGuests * getRandomIntInclusive(10, 20);
        var cleaningFee = cleaningVar;
      } else {
        var cleaningFee = null;
      }
    
      if (Math.random() >= 0.5) {
        var taxRate = getRandomIntInclusive(5, 10) / 100;
      } else {
        var taxRate = null;
      }

      var csvString = `${propertyId},${owner},${maxGuests},${nightlyRate},${avgRating},${minStay},${serviceFeeRate},${recentViews},${reviewsCount},${daysSinceUpdated},${popular},${cleaningFee},${taxRate}\n`;
      data += csvString;
    }
    console.log(`now writing file ${i}`)
    fs.writeFileSync(`./data${i}.csv`, data);
    console.log(`done writing file ${i}, ${stop - start} lines`)
  }

  start += ten_million;
  stop += ten_million;
};

//have to run for each .csv file
// mongoimport --db reservation --collection listings --type csv --headerline --file /Users/uttej/hackreactor/Reservation-Checkout/database/mongo/data1.csv

//can run once for all .csv files
// for i in `ls /Users/uttej/hackreactor/Reservation-Checkout/database/*.csv $1`;  do mongoimport -d reservation -c listings $i --type=csv --headerline  ;  done
