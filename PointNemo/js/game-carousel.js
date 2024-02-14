window.addEventListener('load', function() {
  // Select the grid container element
  var pauseButton = document.getElementById('pauseButton');
  var playButton = document.getElementById('playButton');

  // Set its display property to grid
  pauseButton.style.display = 'grid';
  playButton.style.display = 'none';

  pauseButton.addEventListener('click', function() {
    // Toggle the visibility of grid container and other element
    pauseButton.style.display = 'none';
    playButton.style.display = 'grid';
  });

  playButton.addEventListener('click', function() {
    // Toggle the visibility of grid container and other element
    pauseButton.style.display = 'grid';
    playButton.style.display = 'none';
  });
});
