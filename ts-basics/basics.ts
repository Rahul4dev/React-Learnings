// Primitives: number, string, boolean
// Complex types: array, objects
// function types, parameters

// Primitives: number, string, boolean
let age: number = 12; // variable declaration and assignment
let userName: string;
let isTeacher: boolean;

// age = 12; // value assignment
userName = 'Max';
isTeacher = true;

// Also, some times we do not declare any type to the variable, like
let mark: any;
// now we can assign any type.
mark = 'marker';
mark = 2323;

// Complex Types

// define array type
let hobbies: string[];

hobbies = ['Sports', 'Cooking', 'Leaning'];

// define object type
let friends: {
  name: string;
  age: number;
};

friends = {
  name: 'Max',
  age: 34,
};

// define array of object type
let people: {
  name: string;
  age: number;
}[];

people = [
  { name: 'Max', age: 34 },
  { name: 'Rahul', age: 29 },
];

// Type inference:

let course = 'React Course';
// Here we do not explicitly state the type of course, but TS will infer it through the first type we assign to the course variable.
// Now if we re-assign a new type to course, it will give error = Type 'number' is not assignable to type 'string'

// course = 1233;

// Hence we do not need to declare the type of variables in the file, can use this type inference to infer the type of variables, hence save time in writing less code.

// Union Type: When we want more than one type in single variable e.g.,
let product = 'Marker';
// we also want to add its id as same as product variable assignment later, so we can declare variable in different ways...
let variable: string | number | boolean = 'Marker';
// here we have assigned string to the variable but we can reassign it later to other type
variable = 2345;
variable = false;
// we can see it does not show any errors as it can support three different types of value type. However in previous example we cannot re-assign the course variable to any other type than string.

// Type alias:
// mostly while declaring the type of the variable we repeat the same type eg., previous examples friends variable and people variable have nearly the same type. we can create a type alias to use for these variables without repeating ourselves.

type Person = {
  name: string;
  age: number;
};

let enemies: Person[];
let neighbor: Person;

// Function and Types

//since we declare a function with its variable and their respective type, we generally over look the type of return value as most of the time TS infers this type while assessing the type of the the variables.

function division(a: number, b: number) {
  return a / b;
}

// if we hover over the function we can see that the declared variable have th types with the inferred function type.(function minus(a: number, b: number): number) i.e., number.

// We can declare this type also like
function minus(a: number, b: number): number | undefined {
  return a - b;
}

// Also if the function do not return anything, it will show different type  : void
function get(value: any) {
  console.log(value);
}

// Generics in TypeScript

function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

let demoArray = [2, 3, 4, 5, 6, 7];
const updatedArray = insertAtBeginning(demoArray, 1);
// here we know that updatedArray contains array of numbers, but TS doesn't know this. it shows any[] it inferred the type as we have declared array of type any[]. This means we might face errors while working around in this situation, like we do something

updatedArray[0].split(','); // we can't use split method on numbers. But TS doesn't give any error about this. Hence we have to do something so that TS could recognize which type of variables we are using and it should be active to show the errors.

// For that we have to make the function generic so that it evaluates the declared types of the variables if we do not specify any type.
function placeItLast<type>(array: type[], value: type) {
  const newList = [...array, value];
  return newList;
}

let firstList = [1, 2, 4, 5, 6];
const secondList = placeItLast(firstList, 7);
// secondList.push('2');
secondList.push(2);
// Here we can see that it shows an error that we cannot push string in number[], as it correctly recognize the type as we have given it the firstList full of numbers. Now if we give different type also, it can recognize it well.

let thirdList = ['a', 'b', 'c', 'd', 'e'];
const fourthList = placeItLast(thirdList, 'f');
fourthList.push('2');
// fourthList.push(2);

// Hence by <type> | <T> | <anything> we can tell TS to see every variable type. Through this we can be flexible to take any type of variable and also show error if we work around any other type by mistake.
