const flipcard = document.getElementById("flip-card-inner");
const paper = document.getElementById("paper_audio");
const cardBack = document.getElementById("flip-card-back");
const cardFront = document.getElementById("flip-card-front");
const dripping = document.getElementById("dripping");
const secretButton = document.getElementById("secret-button");



cardFront.addEventListener("click", flipCard);
cardBack.addEventListener("click", flipCard);

secretButton.addEventListener("click", function() {
    dripping.classList.add("spun");
    secretButton.classList.add("resetCursor");
});

function flipCard() {
    flipcard.classList.toggle("flipCard");
}
