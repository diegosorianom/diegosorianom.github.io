const mainContent = document.getElementById('main-content');

const projects = {
    project1: {
        title: "Cafeteria Montecassino",
        description: "Tienda online para una cafeteria fictia ubicada en Estados Unidos.",
        details: "Desarrollado utilizando HTML, CSS y JavaScript"
    }
};

function changeToHome() {
    mainContent.innerHTML = `
        <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-6">
            Portfolio 2024 <br> <strong>Diego Soriano Magallón</strong>
        </h1>
        <div class="w-full border-t border-b border-[#181818] p-6">
            <p class="text-justify text-lg md:text-xl lg:text-2xl xl:text-2xl">Mi nombre es Diego Soriano Magallón, un desarrollador Full-Stack ubicado en Zaragoza. <br>
            Actualmente me encuentro estudiando un grado superior de Desarrollo de Aplicaciones Multiplataforma. <br>
            Mi pasión es la programación y el desarrollo Front-End.</p>
        </div>
        <div class="w-full flex flex-col">
            <h2 class="text-3xl md:text-3xl lg:text-4xl xl:text-5xl mt-6 p-6">Puntos de interés</h2>
            <div class="flex flex-col w-full">
                <button onclick="changeToProyectos()" class="flex items-center justify-between px-6 py-2 border-t border-b border-[#181818] transition duration-300 ease-in-out hover:bg-[#181818] hover:text-[#FFFDE6] text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#181818] font-semibold w-full">
                    <p>Proyectos</p>
                    <p>01</p>
                </button>
                <button onclick="changeToSobreMi()" class="flex items-center justify-between px-6 py-2 transition duration-300 ease-in-out hover:bg-[#181818] hover:text-[#FFFDE6] text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#181818] font-semibold w-full">
                    <p>Sobre mí</p>
                    <p>02</p>
                </button>
                <button onclick="changeToContacto()" class="flex items-center justify-between px-6 py-2 border-t border-b border-[#181818] transition duration-300 ease-in-out hover:bg-[#181818] hover:text-[#FFFDE6] text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#181818] font-semibold w-full">
                    <p>Contacto</p>
                    <p>03</p>
                </button>
            </div>
        </div>
    `;
}

function changeToProyectos() {
    mainContent.innerHTML = `
        <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-6"><strong>Proyectos</strong></h1>
        <div class="flex-1">
            <div class="h-full w-full">
                <!-- Lista de proyectos -->
                <button onclick="proyectoView('project1')" class="flex items-center justify-between px-6 py-2 border-t border-b border-[#181818] transition duration-300 ease-in-out hover:bg-[#181818] hover:text-[#FFFDE6] text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#181818] font-semibold w-full">
                    <p>Cafeteria Montecassino </p> <p>01</p>
                </button>   
                <button onclick="proyectoView()" class="flex items-center justify-between px-6 py-2 border-b border-[#181818] transition duration-300 ease-in-out hover:bg-[#181818] hover:text-[#FFFDE6] text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#181818] font-semibold w-full">
                    <p>Cine Java </p> <p>02</p>
                </button>   
                <button onclick="proyectoView()" class="flex items-center justify-between px-6 py-2 border-b border-[#181818] transition duration-300 ease-in-out hover:bg-[#181818] hover:text-[#FFFDE6] text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#181818] font-semibold w-full">
                    <p>Soundscopes </p> <p>03</p>
                </button>   
                <button onclick="proyectoView()" class="flex items-center justify-between px-6 py-2 border-b border-[#181818] transition duration-300 ease-in-out hover:bg-[#181818] hover:text-[#FFFDE6] text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#181818] font-semibold w-full">
                    <p>Formación Técnica Jazor </p> <p>04</p>
                </button>   
                <button onclick="proyectoView()" class="flex items-center justify-between px-6 py-2 border-b border-[#181818] transition duration-300 ease-in-out hover:bg-[#181818] hover:text-[#FFFDE6] text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#181818] font-semibold w-full">
                    <p>Juego Mecanografia </p> <p>05</p>
                </button>   
                <button onclick="proyectoView()" class="flex items-center justify-between px-6 py-2 border-b border-[#181818] transition duration-300 ease-in-out hover:bg-[#181818] hover:text-[#FFFDE6] text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#181818] font-semibold w-full">
                    <p>Cercius </p> <p>06</p>
                </button>   
                <button onclick="proyectoView()" class="flex items-center justify-between px-6 py-2 border-b border-[#181818] transition duration-300 ease-in-out hover:bg-[#181818] hover:text-[#FFFDE6] text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#181818] font-semibold w-full">
                    <p>Monojump </p> <p>07</p>
                </button>   
                <button onclick="proyectoView()" class="flex items-center justify-between px-6 py-2 border-b border-[#181818] transition duration-300 ease-in-out hover:bg-[#181818] hover:text-[#FFFDE6] text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#181818] font-semibold w-full">
                    <p>URP (en proceso) </p> <p>08</p>
                </button>   
            </div>
        </div>
    `;
}

function changeToSobreMi() {
    mainContent.innerHTML = `
        <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-6"><strong>Sobre mí</strong></h1>
        <p class="text-justify text-lg md:text-xl lg:text-2xl xl:text-2xl">Aquí puedes escribir sobre ti.</p>
    `;
}

function changeToContacto() {
    mainContent.innerHTML = `
        <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-6"><strong>Contacto</strong></h1>
        <p class="text-justify text-lg md:text-xl lg:text-2xl xl:text-2xl">Aquí puedes añadir tu información de contacto.</p>
    `;
}

function proyectoView(projectKey) {
    const project = projects[projectKey];

    mainContent.innerHTML = `
        <div id="main-content" class="w-full h-full flex flex-col">
        <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-6"><strong>${project.title}</strong></h1>
                <p class="text-lg md:text-xl lg:text-2xl xl:text:2xl p-6">${project.description}</p>
                <div class="mt-4 px-6">
                    <h2 class="text-lg md:text-xl lg:text-2xl xl:text-2xl"><strong>Detalles:</strong></h2>
                    <p>${project.details}</p>
                </div>
        <button onclick="changeToProyectos()" class="flex items-center justify-between px-6 py-2 border-t border-b border-[#181818] transition duration-300 ease-in-out hover:bg-[#181818] hover:text-[#FFFDE6] text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#181818] font-semibold w-full" id="proyectosButton">
            <p>Volver atrás</p>
        </button>
        </div>
    `;
}
