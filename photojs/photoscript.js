const card = document.querySelectorAll('.flipper')

function flipCard(){
    this.classList.toggle('flip');
}

card.forEach(card => card.addEventListener('click', flipCard));