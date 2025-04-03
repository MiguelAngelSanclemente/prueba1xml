
//  5. Crea unha función chamada adivinarNumero() que:
//  • Escolla un número aleatorio entre 1 e 10.
//  • Pida ao usuario adiviñar o número usando un prompt.
//  • Comprobe se acertou ou non, e lle indique cantos intentos fixo.



function adivinarNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    let intentos = 0;
    let adivinado = false;
    
    while (!adivinado) {
        intentos++;
        const intento = parseInt(prompt("Adivina el número entre 1 y 10:"));
        
        if (intento === numeroAleatorio) {
            alert(`¡Correcto! Adivinaste en ${intentos} intento(s).`);
            adivinado = true;
        } else {
            alert("Incorrecto. Intenta de nuevo.");
        }
    }
}