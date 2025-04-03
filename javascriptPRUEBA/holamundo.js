//Ejercicio1 Hola Mundo
console.log("Hola mundo")
//Ejercicio2 Nova liña
console.log("Non te rías do lume\nnin do que está a arder.\nCando teñas frío, ti\nvas querer acender.");
//Ejercicio3 Tabulacións
console.log("Xogador\tPuntos\nAna\t120\nLuis\t95\nMarta\t150");
//Ejercicio4  Conrabarra
console.log("C:\\\\Usuarios\\\\Documentos\\\\informe.pdf");
//Ejercicio4 Comiñas dentro de comiñas
console.log('O gato dixo: "Miau" e o can respondeu: \'Guau!\'');
//Ejercicio5: Taboleiro de 3 en raia en consola
console.log(" X | O | X \n-----------\n O | X | O \n-----------\n X | O | X ");




// VARIABLES


//Ejercicio6: Crea unha variable e imprímea por consola
let cidade = "Vigo";
console.log(cidade);

//Ejercicio7: crea un programa que solicie o DNI do usuario e o imprima por consola
let dni = prompt("Introduce o teu DNI:");
console.log(`DNI: ${dni}`);

//Ejercicio8: crea unha aplicación que pida ao usuario dous números e imprima a súa suma por consola.
let num1 = parseFloat(prompt("Primeiro número:"));
let num2 = parseFloat(prompt("Segundo número:"));
console.log(`Suma: ${num1 + num2}`);

//Ejercicio9: crea unha aplicación que pida ao usuario a base e a alura dun recángulo e
//imprime a súa área e o seu perímeTro por consola
let base = parseFloat(prompt("Base do rectángulo:"));
let altura = parseFloat(prompt("Altura do rectángulo:"));
console.log(`Área: ${base * altura}, Perímetro: ${2 * (base + altura)}`);


//Ejercicio10: crea unha aplicación que pida ao usuario 3 números e imprima por consola a súa
//media aritmética.
let num1 = parseFloat(prompt("Número 1:"));
let num2 = parseFloat(prompt("Número 2:"));
let num3 = parseFloat(prompt("Número 3:"));
console.log(`Media: ${(num1 + num2 + num3) / 3}`);

//Exercicio 11: Crea unha aplicación que pida ao usuario un número e lle diga por consola se
//acerou un número secreo defnido no código.
const SECRETO = 42;
let intento = parseInt(prompt("Adiviña o número secreto (entre 1 e 50):"));
console.log(intento === SECRETO ? "¡Acertaches!" : "Fallaste. O número era 42.");

//Exercicio 12: Crea unha aplicación que pida a idade do usuario e indique se pode enrar ao
//parque (maiores de 10 anos) e se en descono por ser maior de 65

let idade = parseInt(prompt("Cantos anos tes?"));
console.log(idade > 10 ? "Podes entrar ao parque." : "Non podes entrar.");
console.log(idade > 65 ? "Tes dereito a desconto." : "Sen desconto.");

//Exercicio 13: Crea unha aplicación que pida ao usuario un número e indique por consola se é
//par ou impar.
let numero = parseInt(prompt("Introduce un número:"));
console.log(numero % 2 === 0 ? "Par" : "Impar");

//Exercicio 14: Crea unha aplicación que pregune ao usuario se é maior de 18 anos ou se sen o
//permiso dos seus pais. Se cumpre algunha desas condicións o rapaz pode saír a xogar. Imprime
//por consola se pode ou non pode saír a xogar

let maiorde18 = confirm("¿Eres mayor de 18 años ");
let permisoPais = confirm("¿Tienes el permiso de tus padres?");
console.log(maiorde18 || permisoPais ? "Puedes salir a xogar  " : " Non podes salir a xogar")

