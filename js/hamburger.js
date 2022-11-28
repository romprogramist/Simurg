function hamburger(b) {
    document.querySelector('.hamburger').addEventListener('click', () => {
      b.classList.toggle("active_menu");
    })
    document.querySelectorAll('nav li').forEach(el => {
      el.addEventListener('click', () => {
        b.classList.remove("active_menu");
      })
    })
  }