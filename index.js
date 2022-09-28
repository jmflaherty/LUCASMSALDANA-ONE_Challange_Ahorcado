/*Nos traemos los distintos elemento como variables*/
const menuprincipal = document.getElementById("menuprincipal");
const pantallaJuego = document.getElementById("juego"); 
const pantallaprincipal = document.getElementById("pantallacompleta")
const trasladaSecciones = document.getElementById("trasladaSecciones")
const btnStartGame = document.querySelector('.btn-iniciarjuego');
const btnAgregarPalabra = document.getElementById('btnAgregarPalabra');
const btnAgregarPalabraVolver = document.getElementById("btnAgregarPalabraVolver")
// const entry = document.querySelector('body');
const divHiddenWord = document.getElementById('hidden-word');
const btnNewGame = document.getElementById("btn-nuevojuego");
const btnDesistir = document.getElementById("btn-desistir");
const alertaWin = document.querySelector('.alerta-win');
const alertaFail = document.querySelector('.alerta-fail');
const alertSecretWord = document.getElementById('alert-secret-word');
const alertPoints = document.getElementById('alert-points');
const score = document.querySelector('.accumulated-points');
const maxedScore = document.querySelector('.maxed-points');

/*Ocultamos la pantalla de juego y la seccion de Agregar palabras*/

alertaWin.style.display = 'none';
alertaFail.style.display = 'none';

/*Le agregamos funcionalidades a los botones*/
btnStartGame.onclick= nuevoJuego;
btnDesistir.onclick = volverAlMenuPrincipal;
btnAgregarPalabraVolver.onclick = volverAlMenuPrincipal;
btnAgregarPalabra.onclick= Seccionagregarpalabra;

/*Creamos las distintas variables para nuestro juego*/
let letrasUsadas= [];
let letrasAcertadas;
let letrasErradas;
let palabraSeleccionada="";
let complete = false
let puntos;
let palabras =["verdugo","caballero","espada","laud","cruzada"]


function nuevoJuego(){
    trasladaSecciones.style.transform = "translateX(-808px)";

    letrasUsadas = [];
    letrasAcertadas=0
    letrasErradas=0

     if(complete == false){ puntos = 0; }

     complete = false;
    if(palabraSeleccionada){quitarGuiones()};
    crearPalabra();
    // hangedCharacter(0);
    // alertWin.style.display = 'none';
    // alertFail.style.display = 'none';
    // keyboardUnlock();
    // score.innerHTML = points;
    // maxedScore.innerHTML = maxedPoints;
}

function volverAlMenuPrincipal(){
    trasladaSecciones.style.transform = "translateX(-404px)";         
}

function Seccionagregarpalabra(){
    trasladaSecciones.style.transform = "translateX(0px)";
}
function crearPalabra(){
    let numeroAlazar = Math.floor(Math.random()*palabras.length);
    palabraSeleccionada = palabras[numeroAlazar].toUpperCase();
    arrayLetras = palabraSeleccionada.split('');  /*El metodo .split me devuelve un array */

    for(let i=0; i<arrayLetras.length; i++){
        const div = document.createElement('div');
        div.setAttribute('id', i);
        div.setAttribute('class', 'hidde');
        div.textContent = '.';
        divHiddenWord.appendChild(div);
    }
}

function quitarGuiones(){
    arrayWord = [];
    for(let i=0; i<palabraSeleccionada.length; i++){
        let removeDivHidden = document.getElementById(i);
        divHiddenWord.removeChild(removeDivHidden);
    }
}