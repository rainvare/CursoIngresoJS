function mostrar()
{
//tomo la edad  

var edad;

edad= document.getElementById("edad").value;
edad= parseInt(edad);

// hago la condición rango de edad 

/*if  (edad >= 13 && edad <=17 ) 
{ 
    alert ("adolecente");
}*/

if (!(edad <13 || edad >17)) {
    alert ("adolecente");
}


}//FIN DE LA FUNCIÓN