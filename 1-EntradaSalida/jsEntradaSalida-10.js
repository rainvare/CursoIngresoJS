/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var descuento;
    var importeFinal;

// tomo el caracter ingresado en la caja de texto y lo guardo en la variable
importe=document.getElementById("importe").value;

// convierto la cadena de carácteres a número
importe = parseInt(importe); 

//realizo la operación con el número dado
descuento=  (importe * 25) / 100;

importeFinal= importe - descuento

// muestro el resultado 
    document.getElementById("resultado").value= importeFinal;
}
