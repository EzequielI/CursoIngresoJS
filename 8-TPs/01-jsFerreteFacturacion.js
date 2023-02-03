/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let Producto1;
    let Producto2;
    let Producto3;
    let Resultado;

    Producto1 = document.getElementById("txtIdPrecioUno").value;
    Producto2 = document.getElementById("txtIdPrecioDos").value;
    Producto3 = document.getElementById("txtIdPrecioTres").value;

    Producto1 = parseInt(Producto1);
    Producto2 = parseInt(Producto2);
    Producto3 = parseInt(Producto3);

    Resultado = Producto1 + Producto2 + Producto3;
    alert("El resultado de la suma de estos productos es " + Resultado);

	
}
function Promedio () 
{
	let Producto1;
    let Producto2;
    let Producto3;
    let Resultado;

    Producto1 = document.getElementById("txtIdPrecioUno").value;
    Producto2 = document.getElementById("txtIdPrecioDos").value;
    Producto3 = document.getElementById("txtIdPrecioTres").value;
   
    Producto1 = parseInt(Producto1);
    Producto2 = parseInt(Producto2);
    Producto3 = parseInt(Producto3);
    
    Resultado = Producto1 + Producto2 + Producto3;
    Resultado = Resultado / 3;
    alert("El promedio es "+ Resultado);

}
function PrecioFinal () 
{
	let Producto1;
    let Producto2;
    let Producto3;
    let Resultado;
    let Resultadoconimpuesto;

    Producto1 = document.getElementById("txtIdPrecioUno").value;
    Producto2 = document.getElementById("txtIdPrecioDos").value;
    Producto3 = document.getElementById("txtIdPrecioTres").value;

    Producto1 = parseInt(Producto1);
    Producto2 = parseInt(Producto2);
    Producto3 = parseInt(Producto3);

    Resultado = Producto1 + Producto2 + Producto3;
    Resultadoconimpuesto = Resultado * 21/100;
    Resultado = Resultado + Resultadoconimpuesto;

    alert("El resultado de la suma de estos productos es " + Resultado)

	



}