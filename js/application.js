function application(forms, windowClosing, body) {
  forms.forEach((f) => {
    f.addEventListener("submit", formSend);
    async function formSend(e) {
      e.preventDefault();
      let formData = new FormData(f);
      let error = formValidate(f);
      if (error === 0) {
        let response = await fetch("mailer/smart.php", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          f.reset();
          // eslint-disable-next-line no-undef
          ym(91809180, "reachGoal", "submit");
          windowClosing.classList.remove("opacity");
          body.classList.add("thanksgiving-body");

          body.addEventListener("click", () => {
            body.classList.remove("thanksgiving-body");
          });
        } else {
          alert("Ошибка");
        }
      } else {
        alert("Заполните обязательные поля");
      }
    }
    function formValidate(form) {
      let error = 0;
      let formReq = form.querySelectorAll("._req");

      for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
      return error;
    }

    function formAddError(input) {
      input.parentElement.parentElement.classList.add("_error");
      input.classList.add("_error");
    }
    function formRemoveError(input) {
      input.parentElement.parentElement.classList.remove("_error");
      input.classList.remove("_error");
    }
  });
}
