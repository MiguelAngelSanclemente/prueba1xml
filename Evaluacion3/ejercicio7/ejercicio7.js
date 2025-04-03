function xogar(jugador) {
    const opciones = ["pedra", "papel", "tesoiras"];
    const computador = opciones[Math.floor(Math.random() * 3)];
    
    console.log(`Jugador: ${jugador} | Computador: ${computador}`);
    
    if (jugador === computador) {
        console.log("Empate!");
    } else if (
        (jugador === "pedra" && computador === "tesoiras") ||
        (jugador === "papel" && computador === "pedra") ||
        (jugador === "tesoiras" && computador === "papel")
    ) {
        console.log("¡Ganaste!");
    } else {
        console.log("Perdiste...");
    }
}