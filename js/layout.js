document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector('body');
    const buttons = document.querySelectorAll('button');
    const telInputs = document.querySelectorAll("input[type='tel']");
    const forms = document.querySelectorAll('form');
    let opasity = document.querySelector('.opasity')
    
    application(forms, opasity, body);
    hamburger(body);
    scrollReaction(buttons);
    maskTel(telInputs);
})
