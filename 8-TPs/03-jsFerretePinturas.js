/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let tempfahrenheit;
    let tempcentígrados;

    tempfahrenheit = document.getElementById("txtIdTemperatura").value;

    tempcentígrados = (tempfahrenheit - 32) * 5/9;
  

    alert(tempfahrenheit + " Fahrenheit son " + tempcentígrados + " Centigrados." );

	
}

function CentigradosFahrenheit () 
{
	
    let tempfahrenheit;
    let tempcentígrados;

    tempcentígrados = document.getElementById("txtIdTemperatura").value;

    tempfahrenheit = (tempcentígrados *  9/5) + 32;
  

    alert(tempcentígrados + " Centigrados son " + tempfahrenheit + " Fahrenheit." );



}
