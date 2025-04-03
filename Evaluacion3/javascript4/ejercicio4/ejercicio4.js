//4. Crea unha función chamada contaRegresiva() que pida un número ao usuario e imprima
// unha conta regresiva desde ese número ata 0


function contaRegresiva() {
    const numero = parseInt(prompt("Introduce un número para la cuenta regresiva:"));
    for (let i = numero; i >= 0; i--) {
        console.log(i);
    }
}