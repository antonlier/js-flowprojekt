//SCRIPT TIL SLIDESHOW
//slides er nu et array af elementer
const slides = document.querySelectorAll(".slide");
console.log(slides);

let currentIndex = 0;

function displayImageNumber(displayNumber) {
  currentIndex = displayNumber;
  // skjuler alle billeder
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  if (currentIndex > slides.length - 1) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }

  slides[currentIndex].style.display = "block";
}

displayImageNumber(0);

const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");

btnNext.addEventListener("click", () => {
  displayImageNumber(currentIndex + 1);
});

btnPrev.addEventListener("click", () => {
  displayImageNumber(currentIndex - 1);
});

//SCRIPT TIL ÅBNINGSTIDER
function displayDay() {
  // Henter den nuværende ugedag som et tal (0 = søndag, 6 = lørdag)
  let date = new Date().getDay();

  console.log(date);

  // Variabel til at gemme dagens navn som tekst
  let day;

  // Oversætter tallet til en ugedag
  switch (date) {
    case 0:
      day = "Søndag";
      break;

    case 1:
      day = "Mandag";
      break;

    case 2:
      day = "Tirsdag";
      break;

    case 3:
      day = "Onsdag";
      break;

    case 4:
      day = "Torsdag";
      break;

    case 5:
      day = "Fredag";
      break;

    case 6:
      day = "Lørdag";
      break;
  }

  // Returnerer dagens navn (fx "Mandag")
  return day;
}

// Kalder funktionen og får dagens navn (fx "Mandag")
const today = displayDay();

// Finder elementet hvor status skal vises (Åben / Lukket)
const status = document.getElementById("status");

// Henter den aktuelle time (0–23)
const hour = new Date().getHours();

// Henter dagens nummer (0 = søndag, 6 = lørdag)
const date = new Date().getDay();

// Definerer åbningstider
const openTime = 9; // Åbner kl. 09
const closeTime = 16; // Lukker kl. 16 (mandag–fredag)
const closeTimeSaturday = 14; // Lukker kl. 14 (lørdag)

// Variabel til tekst (Åben nu / Lukket)
let statusTid;

if (date === 0) {
  statusTid = "Lukket";
  // Tilføjer CSS class for lukket
  status.classList.add("closed");
  status.classList.remove("open");

  // Hvis det er lørdag og indenfor åbningstid
} else if (date === 6 && hour >= openTime && hour < closeTimeSaturday) {
  statusTid = "Åben nu";

  // Tilføjer CSS class for åben
  status.classList.add("open");
  status.classList.remove("closed");

  // Hvis det er mandag–fredag og indenfor åbningstid
} else if (date >= 1 && date <= 5 && hour >= openTime && hour < closeTime) {
  statusTid = "Åben nu";

  // Tilføjer CSS class for åben
  status.classList.add("open");
  status.classList.remove("closed");
} else {
  // Ellers → lukket
  statusTid = "Lukket";

  // Tilføjer CSS class for lukket
  status.classList.add("closed");
  status.classList.remove("open");
}

// Skriver resultatet ud på siden
document.getElementById("shopStatus").innerHTML =
  "I dag er det " + today + ". Butikken er " + statusTid;
