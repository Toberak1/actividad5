function ejecutarActividad() {
    var productos = [];
    var numero;
    
    while (numero !== "ESC") {
        numero = prompt("Ingrese un número (1-4) o ESC para terminar:");
        
        switch (numero) {
            case "1":
                productos.push("Tomate");
                break;
            case "2":
                productos.push("Papa");
                break;
            case "3":
                productos.push("Carne");
                break;
            case "4":
                productos.push("Pollo");
                break;
        }
    }
    
    var salida = "Productos seleccionados:\n";
    for (var i = 0; i < productos.length; i++) {
        salida += productos[i] + "\n";
    }
    
    alert(salida);
}
