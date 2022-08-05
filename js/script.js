const toggleButtons = document.querySelectorAll('.star-button, .watch-later-button');

toggleButtons.forEach(button => {
    let toggled = false;

    button.addEventListener('mousedown', () => {
        toggled = !toggled;
        if(toggled) button.classList.add('toggled');
        else        button.classList.remove('toggled');
    });
});