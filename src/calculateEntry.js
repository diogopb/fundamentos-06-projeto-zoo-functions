const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const countBuyerAge = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      countBuyerAge.child += 1;
    } else if (entrant.age < 50) {
      countBuyerAge.adult += 1;
    } else {
      countBuyerAge.senior += 1;
    }
  });
  return countBuyerAge;
};

const calculateEntry = (entrants) => {
  if (!entrants) {
    return 0;
  }

  const totalBuyers = Object.values(countEntrants(entrants));
  let total = 0;

  total += totalBuyers[0] * data.prices.child;
  total += totalBuyers[1] * data.prices.adult;
  total += totalBuyers[2] * data.prices.senior;
  return total;
};

module.exports = { calculateEntry, countEntrants };
