const openingHours = [
  { day: "Mandag", open: 8, close: 14 },
  { day: "Tirsdag", open: 8, close: 14 },
  { day: "Onsdag", open: null, close: null },
  { day: "Torsdag", open: 8, close: 14 },
  { day: "Fredag", open: 8, close: 18 },
  { day: "Lørdag", open: 12, close: 18 },
  { day: "Søndag", open: 8, close: 12 },
];

//lokalisering af HTML område hvor indholdet skal printes
const containerOpeningHours = document.querySelector(".opening-hours");
let html = `<h2>Åbningstider</h2><ul>`;

//Laver funktionen der skal køre
//Den tjekker først om der er lukkede dage og returnerer tekst
//Ellers returneres en streng med dagen navn og åbne og lukke tidspunkter
function renderOpeningHours() {
  openingHours.forEach((day) => {
    if (day.open === null) {
      html += `
        <li>${day.day}: Lukket</li>`;
    } else {
      html += `
        <li>${day.day}: ${day.open} - ${day.close}</li>`;
    }
  });
  //her tilføjes afslutningnen på listen:
  html += `</ul>`;
  containerOpeningHours.innerHTML = html;
}

renderOpeningHours();
