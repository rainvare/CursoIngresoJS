function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch (mes) {
    case "Enero":
    case"Marzo":
    case "Mayo":  
    case"Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        alert("Este mes tiene 31 días");
        break;

    case "Abril":
    case "Junio":
    case"Septiembre":
    case "Noviembre":
        alert("Este mes tiene 30 días");
        break;

   default :
        alert("Este mes tiene 28 días");
    
}

	
	



}//FIN DE LA FUNCIÓN