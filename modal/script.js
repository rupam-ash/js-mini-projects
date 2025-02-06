let btn = document.querySelectorAll(".btn");
let modals = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let cross = document.querySelector(".cross");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    modals.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

cross.addEventListener("click", () => {
  overlay.classList.add("hidden");
  modals.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  modals.classList.add("hidden");
});
