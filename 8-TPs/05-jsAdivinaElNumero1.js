/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
		//alert(numeroSecreto );
    let numeromax = 100;
    let numeromin = 1;
    let numeroelegido = prompt("Ingrese el numero que usted crea que sera");
    let numerofinal;
    let numero = Math.random()*(numeromax - numeromin)+ numeromin;
    numero = parseInt(numero);
    
    alert("El numero es " + numero);

}

function verificar()
{
	
    if (numero = numeroelegido) {
      alert ("Usted es un ganador!!! y en solo X intentos")
    } else { if (numeroelegido > numero) {
      numerofinal = numeroelegido - numero
      alert("Usted se paso por " + numerofinal)
      }
      alert("")
          }
      
  
  
	
}