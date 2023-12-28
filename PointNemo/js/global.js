let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

console.log(darkMode);

//check if dark mode is enabled
//if enabled we want to turn it off
//if disabled turn it on

const enableDarkMode = () => {
    //add class darkmode to the body
    document.body.classList.add('darkmode');
    //update darkmode in the local storage
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    //add class darkmode to the body
    document.body.classList.remove('darkmode');
    //update darkmode in the local storage
    localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
        console.log(darkMode);
    } else {
        disableDarkMode();
        console.log(darkMode);
    }
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode
    enableDarkMode();
}




let subMenu = document.getElementById('subMenu');

function toggleMenu(){
    subMenu.classList.toggle('open-menu');
}