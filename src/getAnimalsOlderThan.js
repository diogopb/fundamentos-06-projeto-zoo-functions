const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const searchAnimal = data.species.find((specie) => specie.name === animal);
  const searchAge = searchAnimal.residents.every((minimumAge) => minimumAge.age >= age);

  if (searchAge) {
    return true;
  }
  return false;
};

module.exports = getAnimalsOlderThan;
