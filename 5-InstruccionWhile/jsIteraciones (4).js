function mostrar()
{
// tomar el numero
	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
//while (numero <0 || numero <9 || isNaN(numero))
	while (!(numero >= 0 && numero <=9)){
		numero= parseInt( prompt ("Número inválido"));
	}
document.getElementById("Numero").value = numero

}//FIN DE LA FUNCIÓN