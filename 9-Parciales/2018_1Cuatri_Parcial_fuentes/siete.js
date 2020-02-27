function mostrar()
{
var nota;
var sexo;
 var acumuladorNotas;
 var promedioNotas;
 var notaBaja;
 var sexoBajo;
 var flag= 0;
 var contadorVaronesMas6 =0;

    for (var i = 0; i < 5 ; i++)
    {
        var nota = parseInt(prompt("Ingrese nota"));
    while (nota < 0 || nota > 10 || isNaN(nota))
    {
    nota= parseInt(prompt("Nota inválida. Reingrese nota."));
    }
    
    var sexo = (prompt("ingrese sexo: f o m."));

    while ( sexo != "m" && sexo != "f"){
        sexo= prompt("sexo inválido. ingrese f o m");

    }
    acumuladorNotas= acumuladorNotas + nota;

    if( nota<notaBaja || flag == 0) 
    {
        notaBaja= nota;
        sexoBajo = sexo;
        flag = 1;
    }
    if (sexo == "m" && nota >= 6){
        contadorVaronesMas6 ++;
    }
    }
 promedioNotas =  acumulador /5;
    
 alert( "promedio notas " + promedioNotas + 
 "\n Nota más baja " + notaBaja + 
 "\n sexo con nota baja " + sexo + 
  "\n varones con >= 6: " + contadorVaronesMas6);
}
