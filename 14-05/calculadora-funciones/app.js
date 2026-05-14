// =====================================
// CALCULADORA CON FUNCIONES
// =====================================

// Función suma
function sumar(a, b) {
     return  a + b;
}

// Función resta
function restar(a, b) {
    return a - b;
}

// Función multiplicación
function multiplicar(a, b) {
    return a * b;

}

// Función división
function dividir(a, b) {
    return a / b;

}
// Función potencia
function potencia(base, exponente) {
    return base ** exponente;
}
// Función mayor
function mayor(a, b) {
    return a > b ? a : b;
}

// =====================================
// LLAMADO DE FUNCIONES
// =====================================

console.log("Resultado suma:");
console.log(sumar(10, 2));

console.log("----------------");

console.log("Resultado resta:");
console.log(restar(10, 4));

console.log("----------------");

console.log("Resultado multiplicación:");
console.log(multiplicar(10, 6));

console.log("----------------");

console.log("Resultado división:");
console.log(dividir(10, 2));

console.log("----------------");

console.log("Resultado potencia:");
console.log(potencia(2, 3));

console.log("----------------");

console.log("Resultado mayor:");
console.log(mayor(10, 20));

console.log("Resultado división:");
console.log("no se puede dividir por cero");
