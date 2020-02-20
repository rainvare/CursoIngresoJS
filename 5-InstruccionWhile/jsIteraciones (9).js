function mostrar()
{
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	var respuesta='si';
	var flag= 0
	
	do{
		// reescribo el valor de la variable en el dato usuario
			numero = parseInt( prompt ("Ingrese un numero"));
		//valido el numero 
		while ( isNaN(numero))
		{
			numero= parseInt(prompt( "Eso no es un número. Ingrese un número"));
		}
		// valores de max y min
		if (flag== 0||numero > maximo) {
			maximo = numero;
		}
		if (flag ==0 || numero < minimo) {
			minimo = numero;
			flag=1
		}
		// variable de control para la repetición de la acción
		respuesta = prompt ("¿Desea ingresar otro numero? (s) para seguir")
	}while (respuesta == "s")


	document.getElementById("maximo").value= maximo
	document.getElementById("minimo").value= minimo
	

}//FIN DE LA FUNCIÓN