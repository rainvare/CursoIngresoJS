function mostrar()
{

var clave = prompt("ingrese el número clave.");

// mientras la clave sea inválida
// while(!(clave=="utn750")){}

// mientras la clave no sea válida 
while (clave != "utn750")
{
clave = prompt ( "Clave inválida. Reingrese clave");
}
alert ("clave correcta");

}//FIN DE LA FUNCIÓN
