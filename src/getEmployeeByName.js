const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }

  const firstName = data.employees.find((employee) => employee.firstName === employeeName);
  if (firstName) {
    return firstName;
  }

  const lastName = data.employees.find((employee) => employee.lastName === employeeName);
  if (lastName) {
    return lastName;
  }
};

module.exports = getEmployeeByName;
