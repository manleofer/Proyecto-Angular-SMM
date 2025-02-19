//ELEMENTOS DEL DOM
const menu = document.getElementById("menuPrincipal");
const divsDirectivas = document.getElementsByClassName("divContenido")
const divDirectivas = document.getElementById("menuPrincipal");

//EVENTOS
menu.addEventListener("click", accionesMenu);



//FUNCIONES CARGADAS AL INICIO
ocultarContenido();

//FUNCIÓN PARA OCULTAR Y RESETEAR FORMULARIOS
function ocultarContenido() {
    for (let div of divContenido) {
      div.style.display = "none";
    }
  }


//ACCIONES MENU
//FUNCIÓN PARA LAS ACCIONES DEL MENÚ
function accionesMenu(event) {
  ocultarContenido();
if (event.target.tagName == "A") {
    let opcion = event.target.id;
    switch (opcion) {
      case "menuDirectivas":
        divDirectivas.style.display = "block";
        break;
      case "menuComponentes":

        break;
      case "menuEventos":
        
        break;
      case "menuEnrutamiento":
        
        break;
      case "menuFormulario":
        
        break;
      case "menuDatos":
        
        break;
    }
  }
}