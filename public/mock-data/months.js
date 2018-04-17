'use strict';

var moment = require('moment');

var months = moment.months();
var data = months.map(function(month, index) {
  console.log(month);
  return {
    name: month.toLocaleLowerCase(),
    image: 'illustrations/' + month.toLocaleLowerCase() + '.jpg',
    date: moment([2017, index]),
    description: 'Description',
    days_count: moment([2017, index]).daysInMonth(),
    season: getSeason(index)
  }
});

function getSeason(index) {
  var key = Math.ceil((index + 2) / 4);
  var seasons = {
    1: 'spring',
    2: 'summer',
    3: 'autumn',
    4: 'winter'
  }
  console.log(index, seasons[key]);
  return seasons[key];
}

module.exports = {
  getData: function() {
    // return months.map
  }
};
