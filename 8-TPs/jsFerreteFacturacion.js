/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1
    var precio2
    var precio3

    precio1 = parseInt(document.getElementById("PrecioUno").value);
    precio2 = parseInt(document.getElementById("PrecioDos").value);
    precio3 = parseInt(document.getElementById("PrecioTres").value);

    alert ( precio1 + precio2 + precio3);
}
function Promedio () 
{
    var precio1
    var precio2
    var precio3
    var promedio

    precio1 = parseInt(document.getElementById("PrecioUno").value);
    precio2 = parseInt(document.getElementById("PrecioDos").value);
    precio3 = parseInt(document.getElementById("PrecioTres").value);

    
    promedio = Math.floor((precio1 + precio2 + precio3) / 3 );
	 alert ( promedio);
}
function PrecioFinal () 
{
    var precio1
    var precio2
    var precio3
    var total 
    var iva
    var precioFinal

    precio1 = parseInt(document.getElementById("PrecioUno").value);
    precio2 = parseInt(document.getElementById("PrecioDos").value);
    precio3 = parseInt(document.getElementById("PrecioTres").value);

    total = precio1 + precio2 + precio3;
    iva = total * 21 / 100;
   alert( precioFinal = total + iva );
	 
    
}