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
  
  