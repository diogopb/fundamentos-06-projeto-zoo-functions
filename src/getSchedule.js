const data = require('../data/zoo_data');

const { species, hours } = data;

const findAnimalsOfDay = (day) => {
  if (day === 'Monday') {
    return 'The zoo will be closed!';
  }
  return species
    .filter((animal) => animal.availability.includes(day))
    .map((element) => element.name);
};

const generateHours = (day) => {
  if (day === 'Monday') {
    return 'CLOSED';
  }
  const dayInfo = hours[day];
  return `Open from ${dayInfo.open}am until ${dayInfo.close}pm`;
};

const availabilityAnimal = (animal) => {
  const foundAnimal = species.find((specie) => specie.name === animal);
  if (foundAnimal) {
    return foundAnimal.availability;
  } return undefined;
};

const dailySchedule = () => {
  const schedule = {};
  for (const day of Object.keys(hours)) {
    schedule[day] = {
      officeHour: generateHours(day),
      exhibition: findAnimalsOfDay(day),
    };
  } return schedule;
};

const defineType = (animal) => {
  const isAnimal = species.some((specie) => specie.name === animal);
  const isDay = Object.keys(hours).includes(animal);
  if (isAnimal) {
    return 'itsAnimal';
  } if (isDay) {
    return 'itsDay';
  }
  return false;
};

const generateScheduleDaily = (day) => {
  if (day === 'Monday') {
    const schedule = {
      Monday: { officeHour: generateHours(day),
        exhibition: findAnimalsOfDay(day) },
    }; return schedule;
  }
  const schedule = {
    [day]: {
      officeHour: generateHours(day),
      exhibition: findAnimalsOfDay(day),
    },
  };
  return schedule;
};

const getSchedule = (animal) => {
  const animalOrDay = defineType(animal);
  if (!animal || animalOrDay === false) {
    return dailySchedule();
  } if (animalOrDay === 'itsAnimal') {
    return availabilityAnimal(animal);
  } if (animalOrDay === 'itsDay') {
    return generateScheduleDaily(animal);
  }
};

module.exports = getSchedule;
