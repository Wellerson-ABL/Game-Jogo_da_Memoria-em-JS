const emojis = [
    "👍",
    "👍",
    "👌",
    "👌",
    "🛠",
    "🛠",
    "👨‍💻",
    "👨‍💻",
    "🎂",
    "🎂",
    "😎",
    "😎",
    "🎁",
    "🎁",
    "🐱‍👤",
    "🐱‍👤"
];
// para ativar Emojis do windows: ( Win + . ) 

let openCards = [];

// aqui ele mistura os emojis
let shuffleEmojis = emojis.sort(() =>
    (Math.random() > 0.5 ? 2 : -1));

//aqui ele pega os  emojis durante a contagem dos emojis, enquanto
// mistura.
for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    // apartir daqui os emojis na BOx vai ser pendurados na tela.
    // com a funcao appenChild
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    //verificar card, até duas cartas:
    if (openCards.length < 2) {
        this.classList.add("boxOpen")
        openCards.push(this);
    }
    if (openCards.length == 2) {
        setTimeout(checkMatch, 500);

    }
    //console.log(openCards);
}


function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length ===
        emojis.length) {
        alert("Você venceu!");
    }
}

