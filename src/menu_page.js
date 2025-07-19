import pastaimg from "./images/pasta.jpg";
import pizzaimg from "./images/pizza.jpg";
import risottoimg from "./images/risotto.jpg";
const content=document.querySelector("#content");

function MenuPage(){
    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Our Menu";
    menuTitle.className = "menu-title";
    content.appendChild(menuTitle);

    const menuGrid = document.createElement("div");
    menuGrid.className = "menu-grid";

    
    const pastaCard = document.createElement("div");
    pastaCard.className = "menu-card";
    const pastaImgEl = document.createElement("img");
    pastaImgEl.src = pastaimg;
    pastaImgEl.alt = "Pasta";
    pastaCard.appendChild(pastaImgEl);
    const pastaName = document.createElement("h2");
    pastaName.textContent = "Classic Pasta";
    pastaCard.appendChild(pastaName);
    const pastaDesc = document.createElement("p");
    pastaDesc.textContent = "Freshly made pasta tossed in a rich tomato sauce and topped with parmesan.";
    pastaCard.appendChild(pastaDesc);

    
    const pizzaCard = document.createElement("div");
    pizzaCard.className = "menu-card";
    const pizzaImgEl = document.createElement("img");
    pizzaImgEl.src = pizzaimg;
    pizzaImgEl.alt = "Pizza";
    pizzaCard.appendChild(pizzaImgEl);
    const pizzaName = document.createElement("h2");
    pizzaName.textContent = "Wood-Fired Pizza";
    pizzaCard.appendChild(pizzaName);
    const pizzaDesc = document.createElement("p");
    pizzaDesc.textContent = "Hand-tossed pizza baked in our wood-fired oven, with fresh mozzarella and basil.";
    pizzaCard.appendChild(pizzaDesc);

    
    const risottoCard = document.createElement("div");
    risottoCard.className = "menu-card";
    const risottoImgEl = document.createElement("img");
    risottoImgEl.src = risottoimg;
    risottoImgEl.alt = "Risotto";
    risottoCard.appendChild(risottoImgEl);
    const risottoName = document.createElement("h2");
    risottoName.textContent = "Creamy Risotto";
    risottoCard.appendChild(risottoName);
    const risottoDesc = document.createElement("p");
    risottoDesc.textContent = "Arborio rice cooked to perfection with mushrooms and a touch of white wine.";
    risottoCard.appendChild(risottoDesc);

    menuGrid.appendChild(pastaCard);
    menuGrid.appendChild(pizzaCard);
    menuGrid.appendChild(risottoCard);

    content.appendChild(menuGrid);
}

export {MenuPage};