/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    var nombre;
    // el valor de la caja de texto del documento lo guardo en la variable nombre
    nombre = document.getElementById("elNombre").value;
    // muestro el nombre o dato ingresado en ventana emergente
    alert (nombre);
}


