const cards = document.querySelector(".cards");
let qtd = Number(prompt("Digite com quantas cartas você quer jogar"));

while (true) {
  if (typeof qtd === "number" && qtd % 2 === 0 && qtd >= 4 && qtd <= 14) break;
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

for (let i = 0; i < qtd; i++) {
  createCards += `<li class="card" onclick="selectCard(this);"> <img class="front" src="assets/images/front.png"><img class="back hidden" src="${imagesToPlay[i]}"> </li>`;
}

cards.innerHTML = createCards;

let counter = 0;

function selectCard(item) {
  if (counter < 2) {
    item.classList.add("active");
    item.classList.add("selected");
    item.children[0].classList.add("hidden");
    item.children[1].classList.remove("hidden");
    counter++;
  }
  checkSelected();
}

function checkSelected() {
  if (counter === 2) {
    const itemsSelected = document.querySelectorAll(".active.selected");

    if (itemsSelected[0].innerHTML !== itemsSelected[1].innerHTML) {
      setTimeout(function () {
        itemsSelected.forEach((item) => {
          item.classList.remove("active");
          item.children[0].classList.remove("hidden");
          item.children[1].classList.add("hidden");
          item.classList.remove("selected");
        });
      }, 1000);
    }

    counter = 0;
  }
}
