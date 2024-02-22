window.addEventListener('load', function() {
  const toggleButton = document.getElementById('toggleButton');
  const deviceMenu = document.getElementById('deviceMenu');
  const deviceList = document.getElementById('deviceList');

  toggleButton.addEventListener('click', async function() {
    if (deviceMenu.classList.contains('hidden')) {
      try {
        // Request Bluetooth devices
        const devices = await navigator.bluetooth.requestDevice({
          acceptAllDevices: true
        });

        // Clear existing device list
        deviceList.innerHTML = '';

        // Populate device list
        devices.forEach(device => {
          const listItem = document.createElement('li');
          listItem.textContent = device.name || 'Unnamed device';
          listItem.addEventListener('click', () => {
            // Connect to selected device or perform other actions
            console.log('Selected device:', device);
          });
          deviceList.appendChild(listItem);
        });

        // Show the device menu
        deviceMenu.classList.remove('hidden');
      } catch (error) {
        console.error('Error requesting Bluetooth devices:', error);
      }
    } else {
      // Hide the device menu
      deviceMenu.classList.add('hidden');
    }
  });
});
