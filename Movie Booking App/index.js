let allSeats = document.querySelector(".all-seats");

for (let i = 0; i <= 98; i++) {
  let ranNum = Math.floor(Math.random() * 2);
  let randomBookedSeats = ranNum === 1 ? "booked" : "";

  allSeats.insertAdjacentHTML(
    "beforeend",
    `<input type = 'checkbox' name='tickets' id='t${i + 2}' >
    <label for = 't${i + 2}' class='seat ${randomBookedSeats}'></label>`
  );
}

let tickets = allSeats.querySelectorAll("input");
let amount = document.querySelector(".amount").innerHTML;
let count = document.querySelector(".count").innerHTML;
tickets.forEach((ticket) => {
  ticket.addEventListener("change", () => {
    amount = Number(amount);
    count = Number(count);

    if (ticket.checked) {
      count = count + 1;
      amount = amount + 200;
    } else {
      count = count - 1;
      amount = amount - 200;
    }
    console.log(amount + "" + count);

    document.querySelector(".amount").innerHTML = amount;
    document.querySelector(".count").innerHTML = count;
  });
});
