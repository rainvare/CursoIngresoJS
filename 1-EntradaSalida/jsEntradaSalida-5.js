/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var nombre;
    var edad;
    //se solicitan los datos de nombre y edad en caja de texto
nombre = document.getElementById("elNombre").value
edad= document.getElementById("laEdad").value
// los datos ingresados se muestran concatenados en ventana emergente
    alert ("Usted se llama " + nombre+ " y tiene "+ edad + " años.")
}