document.addEventListener("DOMContentLoaded", function() {
    // Hide the preloader once the DOM content is loaded
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

window.addEventListener("load", function() {
    // Hide the preloader once the page is fully loaded
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});
