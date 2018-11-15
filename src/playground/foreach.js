// ****************** Example One ****************** //

const colors = ['red', 'blue', 'green'];

colors.forEach(color => {
  console.log(color);
});

// Prints:
// red;
// blue;
// green;

// ****************** Example Two ****************** //

const numbers = [1, 2, 3, 4, 5];

let sum = 0;

numbers.forEach(number => (sum += number));

console.log(sum);

// Prints: 15

// ***************** Example Three ***************** //

// passing a named function instead of anonymous function

const numbers1 = [6, 7, 8, 9, 10];

let sum1 = 0;

function adder(item) {
  sum1 += item;
}

numbers1.forEach(adder);

console.log(sum1);

// ***************** Example Four ****************** //

const myArray = [2, 5, , 9];

// second item is skipped because its empty

myArray.forEach((item, index, array) => {
  console.log(`value of myArray[${index}] is ${item} in [${array}]`);
});

// along with each element, you can pass index and array argument based on you required operation and they will be available.
