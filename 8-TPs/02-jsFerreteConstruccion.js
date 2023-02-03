/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let alambrenecesario;
    let perimetro;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    perimetro = (largo + ancho) * 2;
    alambrenecesario = perimetro * 3;

    alert("Se necesita "+ alambrenecesario +" metros de alambre para construir")



}
function Circulo () 
{
    let radio;
    let perimetro;
    let alambrenecesario;
    let pi;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseInt(ancho);
    pi= 3,14

    perimetro = pi * radio *2;
    alambrenecesario = perimetro * 3;

   alert()



}
function Materiales () 
{
    let largo;
    let ancho;
    let bolsasdecemento;
    let bolsasdecal;
    let area;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    area = largo * ancho;
    bolsasdecemento = area * 2;
    bolsasdecal = area * 3;

    alert("Se necesitan "+ bolsasdecemento +" bolsas de cemento y "+ bolsasdecal +" de cal para construir el contrapiso" );



	
}