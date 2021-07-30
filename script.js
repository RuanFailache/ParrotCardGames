let qtd,
  imagesToPlay,
  createCards,
  time,
  counter,
  gameCounter,
  stopTime,
  continueToPlay;

const images = [
  "assets/gif/bobrossparrot.gif",
  "assets/gif/explodyparrot.gif",
  "assets/gif/fiestaparrot.gif",
  "assets/gif/metalparrot.gif",
  "assets/gif/revertitparrot.gif",
  "assets/gif/tripletsparrot.gif",
  "assets/gif/unicornparrot.gif",
];

function runGame() {
  qtd = Number(prompt("Digite com quantas cartas você quer jogar"));
  createCards = "";
  time = 0;
  counter = 0;
  gameCounter = 0;
  continueToPlay = "";

  while (true) {
    if (typeof qtd === "number" && qtd % 2 === 0 && qtd >= 4 && qtd <= 14)
      break;
    qtd = Number(prompt("Por favor digite uma quantia valida"));
  }

  imagesToPlay = images.slice(0, qtd / 2);
  imagesToPlay = imagesToPlay.concat(imagesToPlay);
  imagesToPlay = imagesToPlay.sort(() => Math.random() - 0.5);

  for (let i = 0; i < qtd; i++)
    createCards += `<li class="card" onclick="selectCard(this);"> <img class="front" src="assets/images/front.png"><img class="back hidden" src="${imagesToPlay[i]}"> </li>`;

  document.querySelector(".cards").innerHTML = createCards;

  stopTime = setInterval(() => {
    time++;
    document.querySelector(".clock").innerHTML = time;
  }, 1000);
}

function selectCard(item) {
  if (counter < 2) {
    item.classList.add("active");
    item.classList.add("selected");
    item.children[0].classList.add("hidden");
    item.children[1].classList.remove("hidden");
    counter++;
    gameCounter++;
  }
  checkSelected();
  checkIfWin();
}

function checkSelected() {
  if (counter === 2) {
    const itemsSelected = document.querySelectorAll(".active.selected");

    if (itemsSelected.length === 1) {
      return counter--;
    }

    if (itemsSelected[0].innerHTML !== itemsSelected[1].innerHTML) {
      setTimeout(function () {
        itemsSelected.forEach((item) => {
          item.classList.remove("active");
          item.children[0].classList.remove("hidden");
          item.children[1].classList.add("hidden");
        });
      }, 1000);
    }
    itemsSelected.forEach((item) => item.classList.remove("selected"));
    counter = 0;
  }
}

function checkIfWin() {
  const items = document.querySelectorAll(".card");
  for (let item of items) 
    if (item.classList.contains("selected") || !item.classList.contains("active")) 
      return;

  clearInterval(stopTime);
  alert(`Você ganhou com ${gameCounter} jogadas e em ${time} segundos!`);

  while (true) {
    continueToPlay = prompt("Desejas continuar a jogar? (s/n)");
    if (continueToPlay === "s" || continueToPlay === "n") break;
  }
  if (continueToPlay === "s") runGame();
  else return;
}

runGame();
