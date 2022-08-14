const form = document.forms.formPizzas;
const formSearch = form.elements.name;
const PizzasContainer = document.querySelector(".hero__container-card");
document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", searchPizza);
  createCard(getLocal("pizzas"));
});
const getLocal = (item) => {
  return JSON.parse(localStorage.getItem(item));
};
const updateLocal = (item, elements) => {
  return localStorage.setItem(item, JSON.stringify(elements));
};
const searchPizza = (e) => {
  e.preventDefault();
  const pizzaValue = formSearch.value;
  if (pizzaValue === "") {
    return alert("Ingresa una pizza");
  }
  if (
    !pizzas.some((pizzaz) => pizzaz.name.includes(pizzaValue.toLowerCase()))
  ) {
    form.reset();
    return alert("Esa pizza no existe");
  }
  let pizzasFilter = pizzas.filter((pizza) =>
    pizza.name.includes(pizzaValue.toLowerCase())
  );
  updateLocal("pizzas", pizzasFilter);
  createCard(pizzasFilter);
  form.reset();
};

const createCard = (pizzaArr) => {
  return (PizzasContainer.innerHTML = pizzaArr.map((pizza) =>
    pizzaCard(pizza)
  ));
};
