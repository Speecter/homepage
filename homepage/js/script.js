
let button = document.querySelector(".button");
let Picture = document.querySelector(".Picture");
let buttonText = document.querySelector(".buttonText");

button.addEventListener("click", () => {
   Picture.classList.toggle("show");

   if (Picture.classList.contains("show")) {
      buttonText.innerText = "Pokaż";
   } else {
      buttonText.innerText = "Ukryj";
   }
});