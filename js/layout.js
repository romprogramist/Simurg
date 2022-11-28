document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector('body');
    const buttons = document.querySelectorAll('button');
    const telInputs = document.querySelectorAll("input[type='tel']");


    hamburger(body);
    scrollReaction(buttons);
    maskTel(telInputs);
})
