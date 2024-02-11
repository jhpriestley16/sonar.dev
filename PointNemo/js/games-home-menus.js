function openFilterMenu() {
    var openfiltermenu = document.getElementById("filterSelectionMenu");
    
    openfiltermenu.classList.toggle("opened-filter-menu");
    }

    function selectFilter(element) {
        // Remove the element from its current container
        element.parentNode.removeChild(element);
        
        // Add the element to the new container
        document.getElementById("selectedFilters").appendChild(element);
        element.removeAttribute("onclick")
    }

    // Get a reference to the selectedFilters container
var selectedFilters = document.getElementById('selectedFilters');

// Check if the selectedFilters container is empty
function checkEmpty() {
    // Check if the selectedFilters container has no child nodes
    if (!selectedFilters.firstChild) {
        // If it's empty, create a new <p> element with the text "No filters selected..."
        var emptyMessage = document.createElement('p');
        emptyMessage.textContent = "No filters selected...";
        
        // Append the <p> element to the selectedFilters container
        selectedFilters.appendChild(emptyMessage);
    }
}

// Call the checkEmpty function when the page finishes loading
window.addEventListener('load', checkEmpty);