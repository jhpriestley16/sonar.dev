// Application State
let tasks = [];

// Render Function
function renderContent(route) {
    const app = document.getElementById('app');
    switch (route) {
        case '#/':
            app.innerHTML = `
                <h2>Tasks</h2>
                <div class="actions">
                    <button onclick="addTask()">Add Task</button>
                    <button onclick="filterCompleted()">Filter Completed</button>
                    <button onclick="resetFilter()">Reset Filter</button>
                </div>
                <ul>${tasks.map((task, index) => `
                    <li>
                        <span>${index + 1}. ${task}</span>
                        <button onclick="editTask(${index})">Edit</button>
                        <button onclick="deleteTask(${index})">Delete</button>
                    </li>`).join('')}</ul>
                <div class="pagination">
                    <button onclick="prevPage()" ${currentPage === 1 ? 'disabled' : ''}>Prev</button>
                    <button onclick="nextPage()" ${currentPage === totalPages ? 'disabled' : ''}>Next</button>
                </div>
            `;
            break;
        case '#/add':
            app.innerHTML = `
            <header class="page-header" id="#top">
            <nav class="header-nav">
                <span class="page-title">Array Games</span>
                <div class="right-side-nav-group">
                    <div class="appearance-btn-group">
                        <button class="appearance-mode-btn" id="darkModeBtn" onclick="enableDarkMode()" title="Dark mode">
                            <i class="gg-moon"></i>
                        </button>
                        <button class="appearance-mode-btn" id="lightModeBtn" onclick="disableDarkMode()" title="Light mode">
                            <i class="gg-sun"></i>
                        </button>
                        <button class="appearance-mode-btn" id="systemModeBtn" onclick="toggleColorScheme()" title="System preference">
                            <i class="gg-screen"></i>
                        </button>
                    </div>
                </div>
            </nav>
          </header>
            `;
            break;
        default:
            app.innerHTML = '<h2>404 Not Found</h2><p>Page not found.</p>';
    }
}

// Handle Navigation
function handleNavigation() {
    const currentRoute = window.location.hash || '#/';
    renderContent(currentRoute);
}

// Navigate Function
function navigateTo(route) {
    window.location.hash = route;
}

// Add Task Function
function addTask() {
    navigateTo('#/add');
}

// Submit Task Function
function submitTask(event) {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        taskInput.value = '';
        navigateTo('/');
    }
}

// Edit Task Function
function editTask(index) {
    const newTask = prompt('Edit Task', tasks[index]);
    if (newTask !== null) {
        tasks[index] = newTask.trim();
        navigateTo('/');
    }
}

// Delete Task Function
function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
        navigateTo('/');
    }
}

// Filter Completed Tasks Function
function filterCompleted() {
    tasks = tasks.filter(task => !task.includes('(Completed)'));
    navigateTo('/');
}

// Reset Filter Function
function resetFilter() {
    // Reset tasks to original state (just for demonstration)
    tasks = originalTasks.slice();
    navigateTo('/');
}

// Pagination Variables
const itemsPerPage = 5;
let currentPage = 1;
let totalPages = Math.ceil(tasks.length / itemsPerPage);

// Pagination Functions
function nextPage() {
    currentPage++;
    renderContent('#/');
}

function prevPage() {
    currentPage--;
    renderContent('#/');
}

// Event Listener for hashchange event
window.addEventListener('hashchange', handleNavigation);

// Initial content rendering
handleNavigation();

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
