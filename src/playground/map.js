// ****************** Example One ****************** //

const numbers = [1, 2, 3];
const doubledNumbers = [];

// in this case pushes 2 times each element in to doubledNumbere;
numbers.map(number => {
  doubledNumbers.push(number * 2);
});
console.log(doubledNumbers);

// in this case, for each elements the numbers array 2 times of element is return and stored in the double array
const doubled = numbers.map(number => number * 2);

console.log(doubled);

// ****************** Example Two ****************** //

const watches = [
  { brand: 'Titan', cost: 'Cheap' },
  { brand: 'Rolex', cost: 'Expensive' }
];

const watchBrands = watches.map(watch => watch.brand);

console.log(watchBrands);

// one of the common use of map, collecting a property from arrry  object and creating new array // this operation is called as pluck
// in order in map, we performance an operation (function) to each element and return a new array.
// this helps avoiding mututating the main by returning new array

// ****************** Example Three ****************** //

const dataBank = [
  { name: 'John', age: 26, occupation: 'developer' },
  { name: 'Jane', age: 23, occupation: 'doctor' },
  { name: 'Peter', age: 18, occupation: 'student' }
];

const refinedData = (array, property) => {
  return array.map(data => data[property]);
};

console.log(refinedData(dataBank, 'age'));

// plucking with property name to refine specific data

// Map method arugment and format // element, index (optional) and array (optional) are avaiable if needed

const myArray = ['john', 'jane', 'peter'];

const statement = myArray.map((item, index, array) => {
  return `${item} is at ${index} in the array [${array}]`;
});

console.log(statement);
