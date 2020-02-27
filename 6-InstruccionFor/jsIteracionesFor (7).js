function mostrar()
{
    var numero = parseInt(prompt(" ingrese un numero"));

    var contadorDivisores = 0;
    
    while (isNaN(numero )){
        numero = parseInt(prompt("Dato inválido. reingrese número."));
    }
    for (var divisor= 1 ; divisor <= numero; divisor ++){
    if (numero %  divisor ==0)
    {
        console.log(divisor);
        contadorDivisores ++;
    }
    }
    console.log("Cantidad de números divisores: " + contadorDivisores);



}//FIN DE LA FUNCIÓN