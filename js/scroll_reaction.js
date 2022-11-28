function scrollReaction() {
    window.addEventListener('scroll', () => {
        if( window.scrollY == 0 )
        {
            document.querySelector('header').classList.remove("header_closing");
        } else {
            document.querySelector('header').classList.add("header_closing");
        }
    });

}


