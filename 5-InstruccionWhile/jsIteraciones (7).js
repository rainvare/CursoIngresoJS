function mostrar()
{
// declaro variables
	var numero;
	var promedio;
	var contador=0;
	var acumulador=0;
	var respuesta='s';  

// estructura repetitiva
do
{
// reescribo el valor de la variable en el dato usuario
	 numero = parseInt( prompt ("Ingrese un numero"));
// guardo en la variable acumulador el dato y sumo
	 acumulador = acumulador + numero
	 contador = contador +1;
// variable de control para la repetición de la acción
	 respuesta = prompt ("¿Desea continuar? (s) para seguir")
}while (respuesta == "s");

//calculo el promedio
promedio = acumulador /contador;
// mostrar resultados
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN