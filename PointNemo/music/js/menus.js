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

function openDropNav() {
  const dropNavLinks = document.getElementById("dropNavLinks");
  const dropLinkCont = document.getElementById("dropLinkCont");
  const rightChevron = document.getElementById("rightChevron");
  
  if (dropNavLinks.style.display === "none") {
    dropNavLinks.style.display = "flex";
    dropLinkCont.style.height = "fit-content";
    rightChevron.style.rotate = "90deg";
  } else {
    dropNavLinks.style.display = "none";
    dropLinkCont.style.height = "1.5rem";
    rightChevron.style.rotate = "0deg";
  }
}
function expandInfo(event) {
  // Get the clicked button
  const btn = event.target;

  // Find the parent .about-us-site-description-wrapper element
  const wrapper = btn.closest('.about-us-site-description-wrapper');

  // Find the info-text-wrapper inside the current wrapper
  const infoTextWrapper = wrapper.querySelector('.info-text-wrapper');
  const openIcon = wrapper.querySelector('.gg-chevron-right')

  // Toggle the display property of the info-text-wrapper
  if (infoTextWrapper.style.display === 'none') {
      infoTextWrapper.style.display = 'block';
      openIcon.style.rotate = '90deg';
  } else {
      infoTextWrapper.style.display = 'none';
      openIcon.style.rotate = '0deg';
  }
}

/* var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
}; */


