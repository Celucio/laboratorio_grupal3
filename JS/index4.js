var categoria;
    var precio;
    var asientos;
    var fecha;
    var calidad;
    var nombre;
    
    nombre=prompt("Escriba el nombre de la pelicula: ", "Nombre");
    categoria=prompt("Escriba la categoria de la pelicula: ", "Categoria");
    asientos=parseInt(prompt("Escriba el numero de asientos que desea: ", "Asientos"));
    precio=5.50;
    fecha=prompt("Escriba el dia que desea ver la pelicula", "Fecha");
    calidad=prompt("Escriba la calidad de su pelicula", "Calidad");
    
    document.write("PELICULA: " + nombre + "<br>", "CATEGORIA: " + categoria + "<br>", " PRECIO ASIENTOS: " + (asientos*precio) + "<br>", "FECHA: " + fecha + "<br>","CALIDAD: " +calidad );