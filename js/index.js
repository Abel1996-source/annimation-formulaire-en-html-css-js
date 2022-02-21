let is = document.querySelectorAll("i")
is.forEach((i) => {
    i.addEventListener('click', open)
})

function open() {
    this.parentElement.nextElementSibling.classList.add("active")
}

let closers = document.querySelectorAll(".fa-circle-xmark")
closers.forEach((i) => {

    i.addEventListener("click", close)

})

function close() {
    this.parentElement.parentElement.parentElement.classList.remove("active")

}