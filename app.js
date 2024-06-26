
/*let parrafo = document.querySelector('p');//hace referencia al documento html para cambiar su texto
parrafo.innerHTML = 'Ingresa un número del 1 al 10'; //innerHTML le indica al documento lo que tiene que mostrar en texto
*/
//variables
let numeroSecreto = 0;
console.log (`esta vez el número secreto es ${numeroSecreto}`);
let intentos = 0;//importante definir el valor inicial de intentos para la variable
let listaNumerosSorteados = [];
let numeroMaximo = 100
condicionesIniciales();


//funciones
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() { //La función hace referencia al botón de html que tenemos para los intentos del usuario
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //es para hacer referencia al input del usuario y tomarlo como un valor, el .value se encarga de convertirlo en valor
    // parseInt hace que nuestro input no sea un string y se convierta en un numero, así comparamos peras con peras
   
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ('p', `Acertaste el número yippiee! lo hiciste en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        console.log (intentos)
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){ //funcion que sirve para limpiar la caja después de los intentos
    document.querySelector('#valorUsuario').value = ''; //lleva el # porque es por ID
}

function generarNumeroSecreto() { //Esta función genera el número secreto, se le hace referencia arriba
    let numeroSecreto = Math.floor(Math.random ()*numeroMaximo)+1;
    console.log(numeroSecreto)
    console.log(listaNumerosSorteados);
    // si ya sorteams todos los números podemos mostrar un mensaje
    if (listaNumerosSorteados.length == numeroMaximo){

    } else {

    


    //Si el número generado está incluído en la lista hacemos algo
    if(listaNumerosSorteados.includes(numeroSecreto)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroSecreto);
        return numeroSecreto;
        
    }
}
}

function reiniciarJuego() {
    //Qué es?: limpiar la caja, indicar mensaje de inicio, generar el número aleatorio, deshabilitar el botón de nuevo juego, inicializar el número de intentos
    limpiarCaja();
    condicionesIniciales();
    intentos = 1;
    console.log(`esta vez el número secreto es ${numeroSecreto}`);
    document.querySelector('#reiniciar').setAttribute('disabled','true'); // pone el parámetro y define si es verdadero o falso

    
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto de Soft');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();

};