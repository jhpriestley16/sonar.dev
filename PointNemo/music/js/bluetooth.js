window.addEventListener('load', async function() {
    const deviceList = document.getElementById('deviceList');
  
    try {
      // Request Bluetooth device
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true
      });
  
      // Add the device to the list
      const listItem = document.createElement('li');
      listItem.textContent = device.name || 'Unnamed device';
      deviceList.appendChild(listItem);
    } catch (error) {
      console.error('Error requesting Bluetooth device:', error);
    }
  });
  