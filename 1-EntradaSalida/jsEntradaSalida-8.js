/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
    var divissor;
    var resto;

// tomo el caracter ingresado en la caja de texto y lo guardo en la variable
dividendo=document.getElementById("numeroDividendo").value;
// convierto la cadena de carácteres a número
dividendo=parseInt(dividendo); 

divisor=document.getElementById("numeroDivisor").value;
divisor=parseInt(divisor);

// opero con las variables ya convertidas
resto = dividendo % divisor;

// muestro el resto en ventana emergente
    alert ("El resto es " + resto);
}