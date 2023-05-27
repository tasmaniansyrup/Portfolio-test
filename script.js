const flipcard = document.getElementById("flip-card-inner");
const paper = document.getElementById("paper_audio");
const dog = document.getElementById("dogface");
const cat = document.getElementById("catpic");


cat.addEventListener("click", flipCard);
dog.addEventListener("click", flipCard);

function flipCard() {
    flipcard.classList.toggle("flipCard");
}
