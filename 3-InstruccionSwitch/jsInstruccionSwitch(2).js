function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch (mes)
{
    case "Enero":
    case "Febrero":
    case "Abril":
    case "Mayo":
    case "Junio":
        alert("Falta para el invierno");
        break;
    case "Julio":
    alert("Abrigate que hace frío.");
    break;
    case "Agosto":
    alert(" Abrigate que hace frío.");
    break;
    default: 
    alert ("Ya pasamos el frío, ahora calor!!!");
    

}





}//FIN DE LA FUNCIÓN