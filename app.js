const mainContent = document.getElementById('main-content');

const projects = {
    project1: {
        title: "Soundscopes",
        description: "Analizador de perfiles de Spotify",
        details: "Sitio web hecho exclusivamente en el apartado de front. Simula una página que recoje la información de un usuario de Spotify y la muestra de forma agradable.",
        link: "https://github.com/diegosorianom/soundscopes"
    },

    project2: {
        title: "Cafeteria Montecassino",
        description: "Tienda online para una cafeteria fictia ubicada en Estados Unidos.",
        details: "Cafeteria Montecassino fue un trabajo que consistia en realizar una página web para comprar cafés a domicilio. El proyecto fue desarrollado utilizando HTML, CSS, JavaScript, NodeJS y Express.",
        link: "https://github.com/diegosorianom/cafeteria-montecassino"
    },

    project3: {
        title: "Cine Java",
        description: "Sitio de reserva de asientos para ver películas en un cine.",
        details: "Cine Java es un proyecto que consiste en una página web para un cine ficticio. El proyecto fue desarrollado en dos semanas utilizando Java como back.",
        link: "https://github.com/diegosorianom/cine-java"
    },

    project4: {
        title: "Formación Técnica Jazor",
        description: "Sitio web hecho para la empresa Formación Técnica Jazor, en Calahorra",
        details: "Esta página web fue hecha a petición para un centro de formación de soldadura.",
        link: "https://tecnicajazor.com/",
    },

    project5: {
        title: "Cercius",
        description: "Mi primer juego publicado",
        details: "Cercius es un videojuego desarrollado utilizando Unity como motor y C# como lenguaje de programación. El juego consiste en aguantar todo el tiempo posible sobre una plataforma mientras esquivas objetos que caen del cielo. Descargalo ahora",
        link: "https://goblinscorps.itch.io/cercius",
    },

    project6: {
        title: "Monojump",
        description: "Juego con estilo 1-Bit presentado en la 1-Bit jam",
        details: "Este juego fue presentado para la 1-Bit Jam, las reglas de esta jam consistian en hacer un juego utilizando únicamente dos colores. Este juego consiste de 5 niveles y reta al jugador a llegar al final de cada uno a través de complicados saltos. Descargalo ahora",
        link: "https://goblinscorps.itch.io/monojump",
    },

    project7: {
        title: "Proyecto 3D URP",
        description: "Mi primer juego desarrollado en 3D",
        details: "Este juego ha supuesto un reto ya que ha sido mi primer juego desarrollado en 3D, con todos los problemas que esto conlleva. El resultado sin embargo es un entretenido juego de oleadas. Descarga la demo ahora",
        link: "https://goblinscorps.itch.io/truco-o-trato"
    },
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
                    <p>Soundscopes </p> <p>01</p>
                </button>   
                <button onclick="proyectoView('project2')" class="flex items-center justify-between px-6 py-2 border-b border-[#181818] transition duration-300 ease-in-out hover:bg-[#181818] hover:text-[#FFFDE6] text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#181818] font-semibold w-full">
                    <p>Cafeteria Montecassino </p> <p>02</p>
                </button>   
                <button onclick="proyectoView('project3')" class="flex items-center justify-between px-6 py-2 border-b border-[#181818] transition duration-300 ease-in-out hover:bg-[#181818] hover:text-[#FFFDE6] text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#181818] font-semibold w-full">
                    <p>Cine Java </p> <p>03</p>
                </button>   
                <button onclick="proyectoView('project4')" class="flex items-center justify-between px-6 py-2 border-b border-[#181818] transition duration-300 ease-in-out hover:bg-[#181818] hover:text-[#FFFDE6] text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#181818] font-semibold w-full">
                    <p>Formación Técnica Jazor </p> <p>04</p>
                </button>   
                <button onclick="proyectoView('project5')" class="flex items-center justify-between px-6 py-2 border-b border-[#181818] transition duration-300 ease-in-out hover:bg-[#181818] hover:text-[#FFFDE6] text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#181818] font-semibold w-full">
                    <p>Cercius </p> <p>06</p>
                </button>   
                <button onclick="proyectoView('project6')" class="flex items-center justify-between px-6 py-2 border-b border-[#181818] transition duration-300 ease-in-out hover:bg-[#181818] hover:text-[#FFFDE6] text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#181818] font-semibold w-full">
                    <p>Monojump </p> <p>07</p>
                </button>   
                <button onclick="proyectoView('project7')" class="flex items-center justify-between px-6 py-2 border-b border-[#181818] transition duration-300 ease-in-out hover:bg-[#181818] hover:text-[#FFFDE6] text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#181818] font-semibold w-full">
                    <p>URP (en proceso) </p> <p>08</p>
                </button>   
            </div>
        </div>
    `;
}

function changeToSobreMi() {
    mainContent.innerHTML = `
        <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-6"><strong>Sobre mí</strong></h1>
            <p class="text-justify p-6 text-lg md:text-xl lg:text-2xl xl:text-2xl">Hola. Mi nombre es Diego Soriano, soy un desarrollador Full-Stack, pero mi pasión es el Front-End y el desarrollo de videojuegos. Si quieres saber más sobre mis trabajos puedes visitar la zona de proyectos y si quieres ir directamente a mi página de juegos puedes visitarla <a href="https://goblinscorps.itch.io/" class="font-bold underline">aquí</a> </p>
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
        <div>
            <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-6"><strong>${project.title}</strong></h1>
            <p class="text-lg md:text-xl lg:text-2xl xl:text-2xl p-6">${project.description}</p>
            <div class="mt-4 px-6">
                <h2 class="text-lg md:text-xl lg:text-2xl xl:text-2xl"><strong>Detalles:</strong></h2>
                <p>${project.details}</p>
            </div>
            <button onclick="window.open('${project.link}')" class="flex items-center justify-between my-6 px-6 py-2 border-t border-b border-[#181818] transition duration-300 ease-in-out hover:bg-[#181818] hover:text-[#FFFDE6] text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#181818] font-semibold w-full">
                <p>Ver demostración</p>
            </button>
        </div>
        <button onclick="changeToProyectos()" class="flex items-center justify-between px-6 py-2 border-t border-b border-[#181818] transition duration-300 ease-in-out hover:bg-[#181818] hover:text-[#FFFDE6] text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#181818] font-semibold w-full" id="proyectosButton">
            <p>Volver atrás</p>
        </button>
    `;
}
