// Nombre y Apellido: Diana Capizzi
// DNI: 26934465

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pedirTexto = (pregunta) => {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => resolve(respuesta.trim()));
    });
};

async function ejecutarTarea() {
    console.log("=== INICIO DE LA TAREA 1 ===\n");

    // -------------------------------------------------------------
    // Ejercicio 1: Clasificación de Número Entero
    // -------------------------------------------------------------
    console.log("--- Ejercicio 1: Clasificación de Número Entero ---");
    const num1 = parseInt(await pedirTexto("Ingresá un número entero: "));

    if (num1 > 0) {
        console.log("Resultado: Positivo");
    } else if (num1 < 0) {
        console.log("Resultado: Negativo");
    } else {
        console.log("Resultado: Cero");
    }
    console.log("\n");

    // -------------------------------------------------------------
    // Ejercicio 2: Determinar Tipo de Triángulo
    // -------------------------------------------------------------
    console.log("--- Ejercicio 2: Tipo de Triángulo ---");
    const ladoA = parseFloat(await pedirTexto("Ingresá el lado A: "));
    const ladoB = parseFloat(await pedirTexto("Ingresá el lado B: "));
    const ladoC = parseFloat(await pedirTexto("Ingresá el lado C: "));

    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Resultado: Equilátero");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Resultado: Isósceles");
    } else {
        console.log("Resultado: Escaleno");
    }
    console.log("\n");

    // -------------------------------------------------------------
    // Ejercicio 3: Clasificación de Edad
    // -------------------------------------------------------------
    console.log("--- Ejercicio 3: Clasificación de Edad ---");
    const edad = parseInt(await pedirTexto("Ingresá tu edad: "));

    if (edad < 12) {
        console.log("Resultado: Niño");
    } else if (edad >= 12 && edad <= 17) {
        console.log("Resultado: Adolescente");
    } else if (edad >= 18 && edad <= 64) {
        console.log("Resultado: Adulto responsable");
    } else {
        console.log("Resultado: Adulto mayor");
    }
    console.log("\n");

    // -------------------------------------------------------------
    // Ejercicio 4: Par o Impar
    // -------------------------------------------------------------
    console.log("--- Ejercicio 4: Número Par o Impar ---");
    const numParImpar = parseInt(await pedirTexto("Ingresá un número: "));

    if (numParImpar % 2 === 0) {
        console.log("Resultado: El número es Par");
    } else {
        console.log("Resultado: El número es Impar");
    }
    console.log("\n");

    // -------------------------------------------------------------
    // Ejercicio 5: Cálculo de Notas
    // -------------------------------------------------------------
    console.log("--- Ejercicio 5: Cálculo de Notas ---");
    const nota = parseFloat(await pedirTexto("Ingresá tu calificación (0-100): "));

    if (nota >= 90 && nota <= 100) {
        console.log("Equivalencia: A");
    } else if (nota >= 80 && nota < 90) {
        console.log("Equivalencia: B");
    } else if (nota >= 70 && nota < 80) {
        console.log("Equivalencia: C");
    } else if (nota >= 60 && nota < 70) {
        console.log("Equivalencia: D");
    } else if (nota < 60) {
        console.log("Equivalencia: F");
    } else {
        console.log("Calificación inválida");
    }
    console.log("\n");

    // -------------------------------------------------------------
    // Ejercicio 6: Número Mayor
    // -------------------------------------------------------------
    console.log("--- Ejercicio 6: Número Mayor ---");

    // Parte A: Dos números
    console.log("a) Comparación de 2 números:");
    const n1 = parseFloat(await pedirTexto("Ingresá el primer número: "));
    const n2 = parseFloat(await pedirTexto("Ingresá el segundo número: "));

    if (n1 > n2) {
        console.log(`El mayor es: ${n1}`);
    } else if (n2 > n1) {
        console.log(`El mayor es: ${n2}`);
    } else {
        console.log("Ambos números son iguales.");
    }

    // Parte B: Tres números (Opcional usando variable auxiliar)
    console.log("\nb) Comparación de 3 números (con variable auxiliar):");
    const x1 = parseFloat(await pedirTexto("Ingresá el primer número: "));
    const x2 = parseFloat(await pedirTexto("Ingresá el segundo número: "));
    const x3 = parseFloat(await pedirTexto("Ingresá el tercer número: "));

    let mayor = x1; // Asumimos inicialmente que el primero es el mayor

    if (x2 > mayor) {
        mayor = x2;
    }
    if (x3 > mayor) {
        mayor = x3;
    }

    if (x1 === x2 && x2 === x3) {
        console.log("Los tres números son iguales.");
    } else {
        console.log(`El número mayor de los tres es: ${mayor}`);
    }

    console.log("\n=== FIN DE LA TAREA ===");
    rl.close();
}

ejecutarTarea();