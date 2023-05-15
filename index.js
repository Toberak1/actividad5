function ejecutarActividad() {
    var palabra = prompt("Ingrese la palabra: Argentina");
    var numero = parseInt(prompt("Ingrese un número: 2023"));

    if (palabra === "Argentina" && numero === 2023) {
        alert("Palabra y número ingresados correctamente!");
        
    } else {
        alert("Palabra y número incorrectos. Inténtalo de nuevo." + "\n" + palabra + " y " + numero + " no fue lo solicitado");
    }
}
