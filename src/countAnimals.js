const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    const counterAnimals = {};
    data.species.forEach((specie) => {
      counterAnimals[specie.name] = specie.residents.length;
    });
    return counterAnimals;
  }

  const searchAnimals = data.species.find((search) => animal.species === search.name);
  if (!animal.sex) {
    return searchAnimals.residents.length;
  }

  const countSpeciesAndSex = searchAnimals.residents.filter((resident) =>
    resident.sex === animal.sex).length;
  return countSpeciesAndSex;
};
module.exports = countAnimals;
