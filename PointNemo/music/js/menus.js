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
  
  