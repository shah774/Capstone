const name = "M";

// create a function called greet() that accept one parameter (name) when called prints "Hello, {name}"

function greet(name) {
  console.log(`Hello' ${name}`)
}

greet(name);

// function sum(x,y){
// console.log(x+y);
// }
// sum(2,2)

function substract (x,y)
{console.log(x-y);
}
function hello(name,age){
  console.log(`My name is ${name} and I am ${age} years old`)

}
hello("Bob",58)

function multiply(x,y){
  console.log(x*y)
}
multiply(2,5)

const numbers = [1,2,3,4,5];
const toppings =["cheese", "pepperoni","sausage"]

console.log(toppings[2]);
console.log(`We have ${toppings.length} toppings`);

for (let topping of toppings) {
  console.log(topping);
}

let sum = 0;

for (let number of numbers) {
  sum +=number;
}
console.log(sum);
const movies = ["terminator","titanic"]
console.log(movies[0])
console.log(movies[1])

function findSum(array) {
  let sum = 0;
  for (let number of array) {
    sum += number;
  }
  console.log(sum);
}

findSum(numbers);
function print(movies){
  for (let movie of movies){
    console.log(movie)
  }
}
print(movies)

const pizza = {
  name: "supreme",
  cost: 5.99,
  toppings: ["mushroom", "pepper","sausage"]
}

console.log(pizza.name)
console.log(pizza["cost"])



const movie = {
  title: "no country for old men",
  rating: "r",
  releaseDate: "2007"
}
function movieinfo(movie){
  console.log(`The movie ${movie.title} is rated ${movie.rating} was released ${movie.releaseDate}`)

}
movieinfo(movie)

function sum(x,y) {
  return x+y;
}

const result = sum(2,2);
console.log(result);

function makePizza(name, cost, toppings) {
  const pizza = {
    name: name,
    cost: cost,
    toppings: toppings
};
return pizza;
}

console.log(makePizza("supreme", 5.99, ["sausage","pepper","onion"]));
