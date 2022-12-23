function openModal(button, opasity) {
  button.forEach((el) => {
    el.addEventListener("click", () => {
      opasity.classList.add("db");
    });
  });
}
function closeModal(close, opasity) {
  close.addEventListener("click", () => {
    opasity.classList.remove("db");
  });
}
