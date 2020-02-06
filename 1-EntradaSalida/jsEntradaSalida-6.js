/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var num1;
    var num2;
    var resultado;
// tomo el caracter ingresado en la caja de texto y lo guardo en la variable
    num1=document.getElementById("numeroUno").value;
    // convierto la cadena de carácteres a número
    num1=parseInt(num1);

    num2=document.getElementById("numeroDos").value;
    num2=parseInt(num2);
// opero con las variables ya convertidas
    resultado = num1 + num2;
// las muestro en ventana emergente
    alert ("La suma es " + resultado);

}

