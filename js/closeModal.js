function closeModal(close, opasity) {
  close.addEventListener("click", () => {
    opasity.classList.remove("db");
  });
}
