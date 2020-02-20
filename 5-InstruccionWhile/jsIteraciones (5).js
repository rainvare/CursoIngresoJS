function mostrar()
{
//dar valor a variable
var sexo = prompt("Ingrese f ó m .").toLowerCase();
// preguntar si en válido 
//while (sexo != "f" && sexo !="m")
 while (!(sexo == "f" || sexo == "m")) {
     sexo = prompt("Error. Ingrese f ó m .").toLowerCase();
    }
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN