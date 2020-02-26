/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{ 
    var largo;
    var ancho;
var perimetro;
var alambra;

    largo = parseInt(document.getElementById("Largo"));
    ancho = parseInt(document.getElementById("Ancho"));
    perimetro = Math.floor((largo + ancho) * 2);
    alambra = Math.floor(perimetro * 3);
    alert(" Para alambrar, usted necesitará: " + alambra + " metros de alambre.");

}
function Circulo () 
{ var radio 
var perimetro
    radio = parseInt(document.getElementById("Radio"));
perimetro = 2* Math.Pi * radio;
alert("Para alambrar, usted necesitará: " + perimetro + "metros de alambre.");
	
}
function Materiales () 
{
	var largo = parseInt(document.getElementById("Largo"));
    var ancho = parseInt(document.getElementById("Ancho"));
}