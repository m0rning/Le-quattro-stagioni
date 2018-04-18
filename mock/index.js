'use strict';

const moment = require('moment');
const months = moment.months();
const SEASONS = ['Winter', 'Spring', 'Summer', 'Autumn'];

function getSeason(index) {
  return SEASONS[Math.floor((index / 12 * 4) % 4)];
}

const data = months.map(function(month, index) {
  return {
    name: month.toLocaleLowerCase(),
    image: 'illustrations/' + month.toLocaleLowerCase() + '.jpg',
    date: moment([2017, index]).format("YYYY-MM-DD"),
    description: 'Description',
    days_count: moment([2017, index]).daysInMonth(),
    season: getSeason(index + 1)
  }
});

module.exports = {
  getData: function() {
    return data;
  }
};
