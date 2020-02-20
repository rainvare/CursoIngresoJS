function mostrar()
{
// declaro variables
	var contador=0;
	var acumulador= 0;
	var numero;
	var promedio;
// establezco como condición el ingreso de cinco números
	while (contador < 5){
// reescribo el valor de la variable en el dato usuario
		 numero = parseInt( prompt ("Ingrese un numero"));
// validar que sea un número
		 while (isNaN(numero)){
			numero = parseInt( prompt ("Eso no es un número. Ingrese un numero"));
		 }
// guardo en la variable acumulador el dato y sumo
		 acumulador = acumulador + numero;
// incremento en uno la variable de control
		contador= contador +1;
	}
// cálculo el promedio
 promedio = acumulador/5
// mostrar resultados
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value= promedio;

}//FIN DE LA FUNCIÓN