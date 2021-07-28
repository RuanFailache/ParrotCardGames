const cardList = document.querySelector(".cards");
let qtd = Number(prompt("Digite com quantas cartas você quer jogar"));

while (true) {
  if (typeof qtd === "number" && qtd % 2 === 0) break;
  qtd = Number(prompt("Por favor digite uma quantia valida"));
}

const images = [
  "assets/gif/bobrossparrot.gif",
  "assets/gif/explodyparrot.gif",
  "assets/gif/fiestaparrot.gif",
  "assets/gif/metalparrot.gif",
  "assets/gif/revertitparrot.gif",
  "assets/gif/tripletsparrot.gif",
  "assets/gif/unicornparrot.gif",
];

let imagesToPlay = images.slice(0, qtd / 2);
imagesToPlay = imagesToPlay.concat(imagesToPlay);

imagesToPlay = imagesToPlay.sort(() => Math.random() - 0.5);

let createCards = "";
let counter = 0;

while (counter < qtd) {
  createCards += `<li class="card"><img class="front" src="assets/images/front.png"><img class="back hidden" src="${imagesToPlay[counter]}"></li>`;
  counter++;
}

cardList.innerHTML = createCards;

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", function () {
    this.classList.add("active");

    document.querySelector(".active .front").classList.add("hidden");
    document.querySelector(".active .back").classList.remove("hidden");
  });
});
