const pizzaCard = (pizza) => {
  const { name, ingredients, price, img } = pizza;
  return ` <div class="card">
    <div class="card__header">
        <img class="card__img" src="${img}" alt="" srcset="">
    </div>
    <div class="card__content">
        <h2 class="card__title">${capitalize(name)}</h2>
        <h3 class="card__title--small">Ingredientes:</h3>
        <p class="card__text">${ingredients.join(", ")}</p>
        <span class="card__price">$${price}</span>
    </div>
</div>`;
};
