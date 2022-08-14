let pizzas = [];

let Pizza = class {
  constructor(img, id, nombre, ingredientes, precio) {
    this.img = img;
    this.id = id;
    this.name = nombre;
    this.ingredients = ingredientes;
    this.price = precio;
  }
};
let createAndPush = (img, id, nombre, ingredientes, precio) => {
  let nombreNormalice = nombre.trim().toLowerCase();
  let ingredientesNormalice = ingredientes.map((ingrediente) =>
    ingrediente.trim().toLowerCase()
  );
  return pizzas.push(
    new Pizza(img, id, nombreNormalice, ingredientesNormalice, precio)
  );
};
createAndPush(
  "/img/pizzaCuatroQuesos.jpg",
  1,
  "       Pizza cuatro quEsOs       ",
  [
    "queso mozzarella",
    "el queso gorgonzola",
    "queso parmesano",
    "el queso fontina",
  ],
  200
);
createAndPush(
  "img/pizzaPeperoni.jpg",
  2,
  "Pizza de pepperoni",
  ["pepperoni", "hojas de albahaca", "oregano"],
  400
);
createAndPush(
  "img/pizzaDeChampiñones.png",
  3,
  "Pizza con champiñones",
  ["champiñones", "quesO", "salsa de toMatE", "queso mozzarella "],
  600
);
createAndPush(
  "img/pizzaHawaiana.jpg",
  4,
  "Pizza hawaiana",
  ["ananá", "jamón", "tomate"],
  650
);
createAndPush(
  "img/pizzaNapolitana.jpg",
  5,
  "Pizza napolitana",
  ["tomate", "queso mozzarella", "anchoas", "alcaparras", "ajo"],
  700
);
createAndPush(
  "img/pizzaFugazza.jpg",
  6,
  "Pizza fugazza ",
  ["queso", "cebolla", "aceitunas"],
  800
);

let capitalize = (word) => {
  let firstLetter = word.charAt(0).toUpperCase();
  let restWord = word.slice(1);
  return firstLetter + restWord;
};
