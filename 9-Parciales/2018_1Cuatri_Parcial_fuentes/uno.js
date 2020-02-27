
function mostrar()
{

    var ancho
    var largo
    var perimetro

 largo = parseInt(prompt("Ingrese el largo"));
 ancho = parseInt(prompt("Ingrese el ancho"));
//if (isNaN(largo && ancho)){
 perimetro = largo + ancho * 2;

 alert ( " El perimetro es " + perimetro);
}
/*else {
alert (" dato inválido.Reingresar");
largo = parseInt(document.getElementById("Ingrese el largo"));
 ancho = parseInt(document.getElementById("Ingrese el ancho"));

}*/

