window.addEventListener('load', function() {
    var menuButtons = document.querySelectorAll('.menu-opener-btn');
    var menus = document.querySelectorAll('.menu-container');
  
    // Add event listener to each menu button
    menuButtons.forEach(function(button, index) {
      button.addEventListener('click', function() {
        // Close all other menus
        closeAllMenus(index);
  
        // Toggle the visibility of the menu
        menus[index].classList.toggle('hidden');
      });
    });
  
    // Function to close all menus except the one at the specified index
    function closeAllMenus(excludeIndex) {
      menus.forEach(function(menu, index) {
        if (index !== excludeIndex) {
          menu.classList.add('hidden');
        }
      });
    }
  });

  window.addEventListener('load', function() {
    var connectBtn = document.querySelectorAll('.player-settings-btn');
    var connectMenu = document.querySelectorAll('.player-settings-container');
  
    // Add event listener to each menu button
    connectBtn.forEach(function(button, index) {
      button.addEventListener('click', function() {
        // Close all other menus
        closeAllMenus(index);
  
        // Toggle the visibility of the menu
        connectMenu[index].classList.toggle('hidden');
      });
    });
  
    // Function to close all menus except the one at the specified index
    function closeAllMenus(excludeIndex) {
      connectMenu.forEach(function(menu, index) {
        if (index !== excludeIndex) {
          menu.classList.add('hidden');
        }
      });
    }
  });
  
  const serviceOpener = document.getElementById("serviceToggleBtn");
  

  function openChoiceMenu() {
    const serviceChoiceMenu = document.getElementById("serviceChoiceMenu");
    
    if (serviceChoiceMenu.style.display === "none") {
      serviceChoiceMenu.style.display = "block";
    } else {
      serviceChoiceMenu.style.display = "none";
    }
  }

  function toggleSlideMenu() {
    const menu = document.querySelector('.mobile-slide-in-menu');
    const menuOpenerBtn = document.querySelector('.mobile-nav-menu-opener-btn');
    const pageContent = document.querySelector('.page-content-wrapper');
    
    // Toggle the 'open' class on the menu
    menu.classList.toggle('open');
    
    // Toggle the position of the menu opener button
    if (menu.classList.contains('open')) {
        menuOpenerBtn.style.right = '0';
        pageContent.style.filter = 'blur(24px)';
    } else {
        menuOpenerBtn.style.right = '-60vw';
        pageContent.style.filter = 'none';
    }
}
  