const data = require('../data/zoo_data');

const searchEmployee = (idEmployee) => data.employees.find((employee) =>
  employee.id === idEmployee);
const searchSpecie = (employee) => employee.responsibleFor[0];

const getOldestFromFirstSpecies = (id) => {
  const findIdAnimal = searchSpecie(searchEmployee(id));
  const findInfosAnimal = data.species.find((animal) => animal.id === findIdAnimal);
  const ages = findInfosAnimal.residents.sort((a, b) => b.age - a.age);
  const oldestResident = ages[0];

  const array = [oldestResident.name, oldestResident.sex, oldestResident.age];

  return array;
};

module.exports = getOldestFromFirstSpecies;
