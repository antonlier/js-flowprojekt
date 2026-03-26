const heroImage = {
  image: "img/hero.png",
};

const heroContainer = document.querySelector(".hero");

const img = document.createElement("img");
img.src = heroImage.image;
img.alt = "Hero image";

heroContainer.appendChild(img);
