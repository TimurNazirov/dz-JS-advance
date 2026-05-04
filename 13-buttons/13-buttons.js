const buttons = document.querySelector(".buttons");
const pushme = document.querySelectorAll(".pushme");
const counterDisp = document.querySelector("#counter");
let counter = 0;

pushme.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
      btn.innerText = "Нажми меня";
      counter++;
      counterDisp.textContent = counter;
      return;
    }
    pushme.forEach((item) => {
      item.classList.remove("active");
      item.innerText = "Нажми меня";
    });

    btn.classList.add("active");
    btn.innerText = "Нажата";
    counter++;
    counterDisp.textContent = counter;
  });
});
