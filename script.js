const hamburger = document.querySelector(".hamburger")
const ul = document.querySelector("ul")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  ul.classList.toggle("active")
})