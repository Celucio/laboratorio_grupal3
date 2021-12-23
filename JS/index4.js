var categoria;
var precio;
var asientos;
var fecha;
var calidad;
var nombre;

nombre=prompt("Escriba el nombre de la pelicula: ", "Nombre");
categoria=prompt("Escriba la categoria de la pelicula: ", "Categoria");
asientos=parseFloat("Escriba el numero de asientos que desea: ", "Asientos");
precio=5;
fecha=prompt("Escriba el dia que desea ver la pelicula", "Fecha");
calidad=prompt("Escriba la calidad de su pelicula", "Calidad");

document.write("PELICULA: " + nombre );
document.write("<br>");
Document.write("CATEGORIA: " + categoria );
document.write("<br>");
document.write("ASIENTOS: " +(asientos*precio) );
document.write("<br>");
Document.write("FECHA: " + fecha );
document.write("<br>");
Document.write("CALIDAD : " + calidad );
