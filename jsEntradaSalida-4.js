/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
var nombre;
// solicito nombre por prompt (ventana emergente)
nombre = prompt ("Ingrese su nombre");
/* el dato ingresado en la ventana 
se muestra en la caja de texto (ID)*/
document.getElementById("elNombre").value=nombre;


}

