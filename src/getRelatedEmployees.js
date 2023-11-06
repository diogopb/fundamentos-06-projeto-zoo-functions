const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((employee) => employee.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  const array = [];
  if (isManager(managerId)) {
    const trueManager = data.employees.filter((employee) => employee.managers.includes(managerId));
    trueManager.forEach((employee) => array.push(`${employee.firstName} ${employee.lastName}`));
    return array;
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
