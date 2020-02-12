function mostrar()
{
//tomo la edad  
var edad;
var estadoCivil;

edad=  parseInt(document.getElementById("edad").value);
estadoCivil= document.getElementById("estadoCivil").value;

// hago la condición
if (edad >= 18  && estadoCivil == "Soltero" ){
    alert ("Es soltero y no es menor");
}
	


}//FIN DE LA FUNCIÓN