const mainContent = document.getElementById('main-content');

function changeToHome() {
    mainContent.innerHTML = ``;	
    mainContent.innerHTML = `
   <div id="main-content" class="w-full h-full">
            <div class="w-full h-full flex flex-col">
                <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-6">
                    Portfolio 2024 <br> <strong>Diego Soriano Magallón</strong>
                </h1>
                <div class="w-full border-t border-b border-[#181818] p-6">
                    <p class="text-justify text-lg md:text-xl lg:text-2xl xl:text-2xl">Mi nombre es Diego Soriano Magallón, un desarrollador Full-Stack ubicado en Zaragoza. <br>
                    Actualmente me encuentro estudiando un grado superior de Desarrollo de Aplicaciones Multiplataforma. <br>
                    Mi pasión es la programación y el desarrollo Front-End.</p>
                </div>            
                <div class="w-full flex flex-col">
                    <h2 class="text-3xl md:text-3xl lg:text-4xl xl:text-5xl mt-6 p-6">
                        Puntos de interés
                    </h2>
                    <div class="flex flex-col w-full">
                        <button onclick="changeToProyectos()" class="flex items-center justify-between px-6 py-2 border-t border-b border-[#181818] transition duration-300 ease-in-out hover:bg-[#181818] hover:text-[#FFFDE6] text-lg md:text-xl lg:text-2xl xl:text-2xl text-[#181818] font-semibold w-full" id="proyectosButton">
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
            </div>
        </div>
    `
}

function changeToProyectos() {
    mainContent.innerHTML = ``;
    mainContent.innerHTML = `
        <div class="w-full h-full flex flex-col bg-orange-500">
    `
}

function changeToSobreMi() {
    mainContent.innerHTML = ``;
    mainContent.innerHTML = `
        <div class="w-full h-full flex flex-col bg-green-500">
    `
}

function changeToContacto() {
    mainContent.innerHTML = ``;
    mainContent.innerHTML = `
        <div class="w-full h-full flex flex-col bg-blue-500">
    `
}