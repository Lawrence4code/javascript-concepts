var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

// Way One

const deskTypes = desks.reduce(
  (accumulator, currentValue) => {
    currentValue.type === 'sitting'
      ? ++accumulator.sitting
      : ++accumulator.standing;

    return accumulator;
  },
  { sitting: 0, standing: 0 }
);

// console.log(deskTypes);

// Way Two

const deskTypes1 = desks.reduce((accumulator, currentValue) => {
  const { sitting = 0, standing = 0 } = accumulator;
  if (currentValue.type === 'sitting') {
    return { ...accumulator, sitting: sitting + 1 };
  } else {
    return { ...accumulator, standing: standing + 1 };
  }
}, {});

// console.log(deskTypes1);

// remove all duplicates from the array
const numbers = [1, 2, 3, 4, 4];

const newNumber = numbers.reduce((accumulator, currentValue) => {
  if (!accumulator.find(element => element === currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(newNumber);

// https://www.udemy.com/javascript-es6-tutorial/learn/v4/t/quiz/263446
