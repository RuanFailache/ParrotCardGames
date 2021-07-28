const cardList = document.querySelector(".cards");
let qtd = Number(prompt("Digite com quantas cartas você quer jogar"));

while (true) {
  if (typeof qtd === "number" && qtd % 2 === 0) break;
  qtd = Number(prompt("Por favor digite uma quantia valida"));
}

let createCards = "";
let counter = 0;

while (counter < qtd) {
  createCards += '<li class="card"><img src="assets/images/front.png"></li>';
  counter++;
}

cardList.innerHTML = createCards;

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", function () {
    const activeCards = document.querySelectorAll(".cards .active");

    if (activeCards.length < 2) {
      card.classList.add("active");
    }
  });
});

