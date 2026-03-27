//lokalisering og valg af af knappen "bestil"
const placeOrderBtn = document.querySelector(".place-order");

//funktionen som skal køre når "Bestil" knappen bliver aktiveret
function placeOrder() {
  const receiptContainer = document.querySelector(".receipt");

  // jeg henter tid:
  const now = new Date();
  // tiden bliver printet til et tekst-streng:
  const time = now.toLocaleString();

  // byg af kvitteringens indhold. for at gøre koden lidt mere overskuelig bruge backticks til at skrive HTML indhold:
  let receiptHTML = `
    <h3>Tak for din ordre!</h3>
    <p>Vi bekræfter hermed, at vi har modtaget din ordre d. ${time}</p>
    <p>Herunder kan du se en oversigt over din ordre:</p>
    <ul>
  `;

  cart.forEach((item) => {
    const product = productsPop.find((p) => p.id === item.id);

    receiptHTML += `
      <li>
        ${product.navn} x ${item.quantity} - 
        ${product.pris * item.quantity} kr
      </li>
    `;
  });

  receiptHTML += `</ul>`;

  // viser/printer kvittering til HTML
  receiptContainer.innerHTML = receiptHTML;

  // rydder kurven så den er klar til næste køb
  document.querySelector(".cart-items").innerHTML = "";
  cart.length = 0;
}

//denne event listener lytter efter klik på "Bestil" knappen, og kører derefter funktionen "placeOrder"
placeOrderBtn.addEventListener("click", placeOrder);
