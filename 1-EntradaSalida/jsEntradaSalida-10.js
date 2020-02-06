/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var num1;
    var resultado;

// tomo el caracter ingresado en la caja de texto y lo guardo en la variable
num1=document.getElementById("importe").value;
// convierto la cadena de carácteres a número
num1=parseInt(num1); 
//realizo la operación con el número dado
resultado= num1 - ( (num1 *10) / 100);
// muestro el resultado 
    document.getElementById("resultado").value=resultado;
}
