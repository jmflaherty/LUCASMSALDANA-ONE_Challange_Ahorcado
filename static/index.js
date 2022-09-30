/*Nos traemos los distintos elemento como variables*/
/***************************************************/
/*BOTONES de los Menus*/
    /*boton del menu principal*/
const btnStartGame = document.querySelector('.btn-iniciarjuego');
const btnMenuAgregarPalabra = document.getElementById('btnMenuAgregarPalabra');

    /*boton del menu agregar palabras*/
const btnAgregarPlabra = document.getElementById("btnAgregarPalabra")
const btnAgregarPalabraVolver = document.getElementById("btnAgregarPalabraVolver")

    /*botones de la pantalla de Juego */
const btnNewGame = document.getElementById("btn-nuevojuego");
const btnDesistir = document.getElementById("btn-desistir");

/*ALERTAS*/
const alertaVive = document.getElementById('alerta-vive');
const alertaMuere = document.getElementById('alerta-muere');
const palabraSecretaAlertaJuego = document.getElementById('palabraSecretaAlertaJuego');
const puntosAlertaJuego = document.getElementById('puntosAlertaJuego');

const pantallaprincipal = document.getElementById("pantallacompleta")
const trasladaSecciones = document.getElementById("trasladaSecciones")
const body = document.querySelector('body');
const divHiddenWord = document.getElementById('hidden-word');
const score = document.querySelector('.accumulated-points');
const maxedScore = document.querySelector('.puntajemaximo');
const inputAgregarPalabra = document.getElementById("inputAgregarPalabra")

/*Le agregamos funcionalidades a los botones*/
btnStartGame.onclick= nuevoJuego;
btnDesistir.onclick = volverAlMenuPrincipal;

btnAgregarPalabraVolver.onclick = volverAlMenuPrincipal;
btnMenuAgregarPalabra.onclick= seccionagregarpalabra;
btnAgregarPlabra.onclick= agregarPalabra;

body.onkeyup = verificarLetra;
btnNewGame.onclick=nuevoJuego;

/*Creamos las distintas variables para nuestro juego*/
let letrasUsadas;
let letrasAcertadas;
let letrasErradas;
let palabraSeleccionada="";
let complete = false
let puntos;
let intentos=0;
let palabras =["verdugo","caballero","espada","laud","cruzada"];
let abecedario="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
let escucharTeclado=false;


function nuevoJuego(){
    trasladaSecciones.style.transform = "translateX(-811px)";
    reinicioVariables();
 
    crearPalabra();
    // hangedCharacter(0);
    // alertWin.style.display = 'none';
    // alertFail.style.display = 'none';
    // keyboardUnlock();
    // score.innerHTML = points;
    // maxedScore.innerHTML = maxedPoints;
}

function reinicioVariables(){
    letrasUsadas = "";
    letrasAcertadas=0
    letrasErradas=0
    if(complete == false){ puntos = 0; }
    complete = false;
    escucharTeclado=true;
    intentos = 0;
    if(palabraSeleccionada){quitarGuiones()};
    puntosAlertaJuego.innerHTML=0;
    palabraSecretaAlertaJuego.innerHTML="";
    alertaVive.style.display="none";
    alertaMuere.style.display="none";
}

function volverAlMenuPrincipal(){
    trasladaSecciones.style.transform = "translateX(-404px)";    
    escucharTeclado=false;     
}

function seccionagregarpalabra(){
    trasladaSecciones.style.transform = "translateX(0px)";
}

function agregarPalabra(){
    if(!inputAgregarPalabra.value.trim() == ""){
        palabras.push(inputAgregarPalabra.value.trim().toLowerCase());
    }else{
        alert("Ingrese una palabra")
    }
}
function crearPalabra(){
    let numeroAlazar = Math.floor(Math.random()*palabras.length);
    palabraSeleccionada = palabras[numeroAlazar].toUpperCase();
    arrayLetras = palabraSeleccionada.split('');  /*El metodo .split me devuelve un array */

    for(let i=0; i<arrayLetras.length; i++){
        const div = document.createElement('div');
        div.setAttribute('id', i);
        div.textContent = ' ';
        divHiddenWord.appendChild(div);
    }
}

function verificarLetra(evento){

    if(escucharTeclado){
        teclaPresionada = evento.key.toUpperCase();
        if(abecedario.includes(teclaPresionada) && !letrasUsadas.toString().includes(teclaPresionada)){
           letrasUsadas+=teclaPresionada;
           buscarLetraenPalabra(teclaPresionada);
        }else{
            console.log("no entro");
        }
    }
}

function buscarLetraenPalabra(teclaPresionada){
    if(palabraSeleccionada.includes(teclaPresionada)){
        for(let i = 0 ; i<palabraSeleccionada.length;i++){
            if(palabraSeleccionada.charAt(i)==teclaPresionada){
                document.getElementById(i).innerHTML=teclaPresionada;
                document.getElementById(i).removeAttribute("class","esconderpalabra");
                document.getElementById(i).style.border="none";
                letrasAcertadas+=1;
            }
        }
    }else{
        intentos+=1
    }
    if(letrasAcertadas==palabraSeleccionada.length){
        finDeJuego("VIVO");
    }
    if(intentos >= 6){
        finDeJuego("MUERTO");
    }
}

function quitarGuiones(){
    arrayLetras = [];
    for(let i=0; i<palabraSeleccionada.length; i++){
        let removeDivHidden = document.getElementById(i);
        divHiddenWord.removeChild(removeDivHidden);
    }
}

function finDeJuego(estado){
    if(estado=="VIVO"){
        alertaVive.style.display="flex";
        puntos=palabraSeleccionada.length;
        puntosAlertaJuego.innerHTML=puntos;
    }else{
        alertaMuere.style.display="flex";
        palabraSecretaAlertaJuego.innerHTML=palabraSeleccionada;
    }
}