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

function toggleColorScheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDark) {
        enableDarkMode();
        // Add other styles for light mode
    } else {
        disableDarkMode();
        // Add other styles for dark mode
    }
}


function toggleMenu() {
    let = document.querySelector('.toggled-menu');

    if(let.style.visibility === 'hidden') {
        let.style.visibility = 'visible';
    } else {
        let.style.visibility = 'hidden';
    }
}

function toggleAppearance() {
    let openMenu = document.getElementById('appearance-menu');

    if (openMenu.style.visibility === 'hidden') {
        openMenu.style.visibility = 'visible';
    } else {
        openMenu.style.visibility = 'hidden';
    }
}



function openMobileSidebar() {
    let openSide = document.querySelector('.mobile-sidebar');

    if (openSide.style.display === 'none') {
        openSide.style.display = 'block';
    } else {
        openSide.style.display = 'none';
    }
}