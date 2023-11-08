const data = require('../data/zoo_data');

const getResponsible = (employeeId) => {
  const findEmployee = data.employees.find((employee) => employee.id === employeeId);
  if (!findEmployee) {
    return [];
  }
  const responsible = findEmployee.responsibleFor
    .map((species) => data.species.find((specie) => specie.id === species))
    .map((specie) => specie.name);
  return responsible;
};

const generateCoverage = () => data.employees.map((employee) => {
  const informationsEmployee = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getResponsible(employee.id),
    locations: getResponsible(employee.id).map((name) => {
      const species = data.species.find((specie) => specie.name === name);
      if (species) {
        return species.location;
      } return '';
    }),
  };
  return informationsEmployee;
});

const verification = (verify) => {
  const verifyId = data.employees.some((employee) =>
    employee.id === verify.id);
  const verifyFirstName = data.employees.some((employee) =>
    employee.firstName === verify.name);
  const verifytLastName = data.employees.some((employee) =>
    employee.lastName === verify.name);
  if (verifyId) {
    return 'itsId';
  }
  if (verifyFirstName || verifytLastName) {
    return 'itsName';
  }
  return false;
};

const getEmployeesCoverage = (covered) => {
  if (!covered) {
    return generateCoverage();
  }
  const parameterVerified = verification(covered);
  if (parameterVerified === 'itsId') {
    return generateCoverage().find((element) => element.id === covered.id);
  } if (parameterVerified === 'itsName') {
    const employeeDesigned = data.employees.find((employee) =>
      employee.firstName === covered.name || employee.lastName === covered.name);
    return generateCoverage().find((idDesigned) => idDesigned.id === employeeDesigned.id);
  } if (!parameterVerified) {
    throw new Error('Informações inválidas');
  }
};

module.exports = getEmployeesCoverage;
