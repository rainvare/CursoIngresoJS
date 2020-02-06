/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var importe;
    var aumento;
    var importeFinal;

// tomo el caracter ingresado en la caja de texto y lo guardo en la variable
importe=document.getElementById("sueldo").value;

// convierto la cadena de carácteres a número
importe = parseInt(importe); 

//realizo la operación con el número dado
descuento=  (importe * 10) / 100;

importeFinal= importe + descuento

// muestro el resultado 
    document.getElementById("resultado").value= importeFinal;
}