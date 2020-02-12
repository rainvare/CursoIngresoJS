function mostrar()
{
//tomo la edad  
var edad;

edad= document.getElementById("edad").value;
edad= parseInt(edad);

//hago la condición
if (edad <13) 
{ 
    alert ("niño");
}
 else if (edad <=17)
{ 
    alert ("adolecente");
}
else 
{ 
    alert ("mayor de edad");
}

}//FIN DE LA FUNCIÓN