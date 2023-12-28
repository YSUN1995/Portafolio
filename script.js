//FUNCION QUE OCULTA O MUESTRA EL MENU
let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}


function seleccionar(){
    //oculto el menu una vez que sellecciono una opcion
    document.getElementById("nav").classList= "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("Python");
        habilidades[3].classList.add("Java");
        habilidades[4].classList.add("autodidacta");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("proactivo");
        habilidades[7].classList.add("planificador");
    }
}

//DETECTAR EL SCROLLING PARA APLICAR LA ANIMACION DE LA BARRA DE HABILIDADES
window.onscroll = function(){
    efectoHabilidades();
}