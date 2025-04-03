
//Exercicio 9 (ENTREGABLE): Crea un programa empregando todo o que saibas que lle solicite ao
//usuario dous pokémon, indicando só o seu tipo.

//- Só serán válidos “lume”, “auga” e “planta”.

//-O programa deberá indicar que pokémon é o vencedor ou se hai un empate.

//- No caso de que un dos tipos non sexa os establecidos, o programa amosará un mensaxe
//indicando que os tipos introducidos non son válidos




// Solicitar tipos de los Pokémon
let tipo1 = prompt("Introduce o tipo do primeiro Pokémon (lume, auga, planta):").toLowerCase();
let tipo2 = prompt("Introduce o tipo do segundo Pokémon (lume, auga, planta):").toLowerCase();

// Validar tipos
if (
    (tipo1 !== "lume" && tipo1 !== "auga" && tipo1 !== "planta") ||
    (tipo2 !== "lume" && tipo2 !== "auga" && tipo2 !== "planta")
) {
    console.log("Erro: Os tipos introducidos non son válidos."); //No caso de que un dos tipos non sexa os establecidos, o programa amosará un mensaxe
} else {
    // Comparar tipos
    if (tipo1 === tipo2) {
        console.log("Empate!");
    } else if (
        (tipo1 === "lume" && tipo2 === "planta") ||
        (tipo1 === "planta" && tipo2 === "auga") ||
        (tipo1 === "auga" && tipo2 === "lume")
    ) {
        console.log(`Vence o Pokémon tipo ${tipo1}!`);
    } else {
        console.log(`Vence o Pokémon tipo ${tipo2}!`);
    }
}