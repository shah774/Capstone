const pizzaToppings = ["black olive", "green pepper", "jalapenos", "mushroom"];
function greetCustomer() {
  const pizzaToppings = ["black olive", "green pepper", "jalapenos", "mushroom"];

  console.info( "Welcome to the era of taste");
  console.info("We offer the following toppings:");

  for (let i = 0; i < pizzaToppings.length; i++) {
    console.info("_ " +pizzaToppings[i]);
  }
}
function getPizzaOrder(size, crust,mushrooms, olive, jalapenos) {
let toppingsStr = toppings.length ? toppings.join(", ") : "no toppings";
 console.info(`One ${size} ${crust} crust pizza with ${toppingsStr} coming up!`);
 return [size, crust, toppings];
}
order = getPizzaOrder("large", "crust", "mushrooms", "jalapenos", "mushrooms"),
console.info(order);

function servePizza(pizza) {
  const { size, crust, toppings } = pizza;

  const toppingsStr = toppings && toppings.length
  ? toppings.join(", ")
  : "no toppings";
  console.log(`Order up! Here is your ${size} ${crust} crust pizza with toppings ${toppingsStr}, enjoy!`);

  return pizza;
}

const order  = getPizzaOrder("large", "crust", "mushrooms");
const preparedPizza = preparePizza(order);
const servedPizza = servePizza(preparedPizza);

console.info(servedPizza);

