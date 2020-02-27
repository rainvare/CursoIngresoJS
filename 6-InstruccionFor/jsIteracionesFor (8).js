function mostrar()
{

    var numero = parseInt(prompt(" ingrese un numero"));
    
    while (isNaN(numero)){
        numero = parseInt(prompt("Dato inválido. reingrese número."));
    }

    for (numero; numero <= 1; numero++){
        if (numero %  numero == 0)
    {
        console.log("el número " + numero + " es primo");
    }
    else {
        console.log ("el numero " + numero + " no es primo");
    }
    }
    




}//FIN DE LA FUNCIÓN