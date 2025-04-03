
//  3. Crea unha función chamada calcularIdade() que pida ao usuario o ano no que naceu e
//  devolva a súa idade aproximada


function calcularIdade() {
    const añoNacimiento = parseInt(prompt("Introduce tu año de nacimiento:"));
    const añoActual = new Date().getFullYear();
    return añoActual - añoNacimiento;
}