function findTheOldest(people) {
  let oldest = people[0];

  for (let i = 0; i < people.length; i++) {
    let person = people[i];

    let deathYear = person.yearOfDeath || new Date().getFullYear();

    let age = deathYear - person.yearOfBirth;

    let oldestDeathYear = oldest.yearOfDeath || new Date().getFullYear();
    let oldestAge = oldestDeathYear - oldest.yearOfBirth;

    if (age > oldestAge) {
      oldest = person;
    }
  }

  return oldest;
}

// Do not edit below this line
module.exports = findTheOldest;
