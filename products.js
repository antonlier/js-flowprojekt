//Oprettelse af et template produkt som alle nye produkter så skal "inherite"
const product = {
  id: "",
  pris: 4,
  navn: "Arabica 100%",
  mængde: 250 + "g",
  image: "",
};

//Her laver jeg så en funktion der tager alle "properties" fra min template og returnerer så værdierne,
// for derefter at lade dem blive "overridet".
//Jeg bruger "spread" til at klone/overføre alle mine properties
function createProduct({ id, pris, navn, mængde, image, ...overrides }) {
  return {
    ...product,
    id,
    pris,
    navn,
    mængde,
    image,
  };
}

//Nu kan jeg så lave mit produkt array (som sin egen const med navn)
// og derefter lave alle mine produkter ud fra min template.
// Jeg sikrer på denne måde, at mine produkt-objekter ikke går i stykker ved f.eks. tastefejl i kodningen - den er sikkert kodet i min template og funktion
const productsPop = [
  createProduct({
    id: "brasilian-samba-s",
    pris: 149,
    navn: "Brasilian Samba S",
    mængde: 250 + "g",
    image: "img/brasilian-samba-s.png",
  }),
  createProduct({
    id: "berry-shower-s",
    pris: 129,
    navn: "Berry Shower S",
    mængde: 250 + "g",
    image: "img/berry-shower-s.png",
  }),
  createProduct({
    id: "ethiopian-lux",
    pris: 299,
    navn: "Ethiopian Lux",
    mængde: 250 + "g",
    image: "img/ethiopian-lux.png",
  }),
  createProduct({
    id: "brasilian-samba-l",
    pris: 289,
    navn: "Brasilian Samba L",
    mængde: 500 + "g",
    image: "img/brasilian-samba-l.png",
  }),
  createProduct({
    id: "berry-shower-xl",
    pris: 499,
    navn: "Berry Shower XL",
    mængde: 1000 + "g",
    image: "img/berry-shower-xl.png",
  }),
  createProduct({
    id: "ugens-rist",
    pris: 199,
    navn: "Ugens Rist",
    mængde: 250 + "g",
    image: "img/ugens-rist.png",
  }),
];

//Nu kan jeg så begynde at printe mine data til HTML.
// Først finder jeg den container/klasse, jeg har oprettet, i HTML dokumentet vha. querySelector:
const container = document.querySelector(".products");

//Så opretter (document.createElement) jeg en kasse (div) og tilføjer en class (classList.add)
//Dette gør jeg for, at jeg kan style mit produkt-kort i CSS senere.
productsPop.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("product-card");

  //Så skal jeg oversætte mine produktdata fra javascript til HTML ved brug af innerHTML:
  card.innerHTML = `
    <img src="${product.image}" alt="${product.navn}">
    <h2>${product.navn}</h2>
    <p>${product.mængde}</p>
    <p>${product.pris} kr</p>
    <button data-id="${product.id}">Læg i kurv</button>
  `;

  //Til sidst lægger jeg mit nye kort ind nederst min container:
  container.appendChild(card);
  //Som udgangspunkt printes min produktarray i den rækkefølge de er kodet i
});

//Nu bygger jeg koden til min kurv

//Først data array til min kurv:
const cart = [];

//Tilføjer en event listener der reagerer på alle klik på
document.addEventListener("click", (e) => {
  if (e.target.matches("button[data-id]")) {
    const id = e.target.dataset.id;
    addToCart(id);
  }
});

function addToCart(productId) {
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      id: productId,
      quantity: 1,
    });
  }

  renderCart();
}

//
const cartBtn = document.querySelector(".kurv");
const cartOverlay = document.querySelector(".cart-overlay");
const closeCartBtn = document.querySelector(".close-cart");

// åbner kurv
cartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cartOverlay.classList.add("active");
});

// lukker kurv
closeCartBtn.addEventListener("click", () => {
  cartOverlay.classList.remove("active");
});

function renderCart() {
  const container = document.querySelector(".cart-items");

  container.innerHTML = "";

  cart.forEach((item) => {
    const product = productsPop.find((p) => p.id === item.id);

    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <span>${product.navn} x ${item.quantity}</span>
      <span>${product.pris * item.quantity} kr</span>
    `;

    container.appendChild(div);
  });
}
