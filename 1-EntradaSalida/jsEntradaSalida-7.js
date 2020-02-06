/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
	var num1;
    var num2;
    var resultado;

    num1=document.getElementById("numeroUno").value;
    num1=parseInt(num1);

    num2=document.getElementById("numeroDos").value;
    num2=parseInt(num2);

    resultado = num1 - num2;

    alert ("La resta es " + resultado);
}


function multiplicar()
{ 
	var num1;
    var num2;
    var resultado;

    num1=document.getElementById("numeroUno").value;
    num1=parseInt(num1);

    num2=document.getElementById("numeroDos").value;
    num2=parseInt(num2);

    resultado = num1 * num2;

    alert ("La multiplicación es " + resultado);
}


function dividir()
{
	var num1;
    var num2;
    var resultado;

    num1=document.getElementById("numeroUno").value;
    num1=parseInt(num1);

    num2=document.getElementById("numeroDos").value;
    num2=parseInt(num2);

    resultado = num1 / num2;

    alert ("La división es " + resultado);
}


