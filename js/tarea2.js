const sentence = "Hola, mi nombre es Lorena.";

// Método indexOf
const indexOfLorena = sentence.indexOf("Lorena");
console.log(indexOfLorena); // Resultado: 16

// Método includes
const includesLorena = sentence.includes("Lorena");
console.log(includesLorena); // Resultado: true

// Método startsWith
const startsWithHola = sentence.startsWith("Hola");
console.log(startsWithHola); // Resultado: true

// Método endsWith
const endsWithPunto = sentence.endsWith(".");
console.log(endsWithPunto); // Resultado: true

// Método slice
const slicedSentence = sentence.slice(6, 16);
console.log(slicedSentence); // Resultado: "mi nombre"

// Método substring
const substringSentence = sentence.substring(6, 16);
console.log(substringSentence); // Resultado: "mi nombre"

// Método trim
const trimmedSentence = sentence.trim();
console.log(trimmedSentence); // Resultado: "Hola, mi nombre es Lorena."

// Método repeat
const repeatedSentence = sentence.repeat(2);
console.log(repeatedSentence);
// Resultado:
// "Hola, mi nombre es Lorena.Hola, mi nombre es Lorena."
