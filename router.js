// app.js
const routes = {
    // home: 'index.html',
    proyectos: 'index.html',
    sobreMi: '/templates/sobremi.html',
    contacto: '/templates/contacto.html'
};

async function loadContent(route) {
    const mainContent = document.getElementById('main-content');
    try {
        const response = await fetch(routes[route]);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        mainContent.innerHTML = html;
    } catch (error) {
        console.error('Error loading content: ', error);
        mainContent.innerHTML = '<p>Error al cargar el contenido</p>';
    }
}

// Función para cambiar entre modo claro y oscuro
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    // Aquí puedes agregar más lógica para cambiar otros elementos si es necesario
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Cargar contenido inicial (home)
    loadContent('home');

    // Configurar el botón de modo oscuro
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', toggleDarkMode);
});

// Exponer la función loadContent globalmente
window.router = { loadContent };