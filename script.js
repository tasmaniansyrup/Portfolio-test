const flipcard = document.getElementById("flip-card-inner");
const paper = document.getElementById("paper_audio");

flipcard.addEventListener("click", flipCard);

async function flipCard() {
    flipcard.classList.toggle("flipCard");
}
