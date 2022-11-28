document.addEventListener('DOMContentLoaded', function () {    

    const buttons = document.querySelectorAll('button');
    let opasity = document.querySelector('.opasity')
    let close = document.querySelector('.close');

    openModal(buttons, opasity);
    closeModal(close, opasity);
})
