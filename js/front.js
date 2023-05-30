let accordion = document.getElementsByClassName('plus');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}

let btn = document.querySelector(".hero--btn")
btn.addEventListener("click", () => {
    document.querySelector(".hero--block__square").style.display = "block"
})

let closeBtn = document.querySelector(".hero--btn__close")
closeBtn.addEventListener("click", () => {
    document.querySelector(".hero--block__square").style.display = "none"
});