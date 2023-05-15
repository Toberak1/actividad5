function ejecutarActividad() {
    let nombres = [];
    let nombre;
    
    while (nombre !== "Voldemort") {
        nombre = prompt("Ingrese un nombre:");
        nombres.push(nombre);
    }
    
    let salida = "Nombres ingresados:\n";
    for (let i = 0; i < nombres.length; i++) {
        salida += nombres[i] + "\n";
    }
    
    alert(salida);
}
