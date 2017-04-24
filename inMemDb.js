const users = {
  '1': { name: 'Alice', age: 12, gender: 'f', jobType: 'st' },
  '2': { name: 'Bob', age: 21, gender: 'm', jobType: 'dv' },
  '3': { name: 'Claire', age: 56, gender: 'f', jobType: 'dv' },
  '4': { name: 'David', age: 9, gender: 'm', jobType: 'na' },
  '5': { name: 'Eric', age: 61, gender: 'm', jobType: 'dv' },
  '6': { name: 'Fred', age: 45, gender: 'm', jobType: 'dv' },
  '7': { name: 'George', age: 38, gender: 'm', jobType: 'dv' },
  '8': { name: 'Hannah', age: 15, gender: 'f', jobType: 'na' },
  '9': { name: 'Ilona', age: 17, gender: 'f', jobType: 'st' },
  '10': { name: 'Jake', age: 27, gender: 'm', jobType: 'dv' },
  '11': { name: 'Kathy', age: 8, gender: 'f', jobType: 'na' },
  '12': { name: 'Liam', age: 20, gender: 'm', jobType: 'st' }
};

const employer = {
  dv: 'DevLeague',
  st: 'Student',
  na: 'N/A'
};

function byId(id) {
  return users[id];
}

function youngest() {
  let youngest = null;
  Object.keys(users).forEach( (v, i, arr) => {
    if (youngest === null) {
      youngest = users[i+1];
    }
    if (users[i+1].age < youngest.age) {
      youngest = users[i+1];
    }
  });
  return youngest;
}

function oldest() {
  let oldest = null;
  Object.keys(users).forEach( (v, i, arr) => {
    if (oldest === null) {
      oldest = users[i+1];
    }
    if (users[i+1].age > oldest.age) {
      oldest = users[i+1];
    }
  });
  return oldest;
}

function males () {
  let males = [];
  Object.keys(users).forEach( (v, i, arr) => {
    if (users[i+1].gender === 'm') {
      males.push(users[i+1]);
    }
  });
  return males;
}

function females() {
  let females = [];
  Object.keys(users).forEach( (v, i, arr) => {
    if (users[i+1].gender === 'f') {
      females.push(users[i+1]);
    }
  });
  return females;
}

function employees(employee) {
  // namespace conflicts much?
  let employees = [];
  let employerIndex = null;
  let employerKey = null;

  Object.values(employer).forEach( (v, i, arr) => {
    if (v === employee) {
      employerIndex = i;
      return;
    }
  });

  employerKey = Object.keys(employer)[employerIndex];

  Object.keys(users).forEach( (v, i, arr) => {
    if (users[i+1].jobType === employerKey) {
      employees.push(users[i+1]);
      employees[employees.length-1].jobType = employer[employees[employees.length-1].jobType];
    }
  });
  return employees;
}

function canDrink() {
  let canDrink = [];
  Object.keys(users).forEach( (v, i, arr) => {
    if (users[i+1].age >= 21) {
      canDrink.push(users[i+1]);
    }
  });
  return canDrink;
}

const functions = {
  byId: byId,
  youngest: youngest,
  oldest: oldest,
  males: males,
  females: females,
  employees: employees,
  canDrink: canDrink
};

module.exports = functions;
