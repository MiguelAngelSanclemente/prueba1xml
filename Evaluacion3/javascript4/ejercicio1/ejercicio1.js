//  1. Crea unha función chamada saudar() que pida o nome do usuario cun prompt, imprima un
//  saúdo na consola e devolva o texto do saúdo.


function saudar() {
    const nombre = prompt("Por favor, introduce tu nombre:");
    const saludo = '¡Hola, ${nombre}! Bienvenido/a.';
    console.log(saludo);
    return saludo;
}