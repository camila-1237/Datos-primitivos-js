const sentence = "Hola, mi nombre es Camila.";

// Método indexOf
const indexOfCamila = sentence.indexOf("Camila");
console.log(indexOfCamila); // Resultado: 16

// Método includes
const includesCamila = sentence.includes("Camila");
console.log(includesCamila); // Resultado: true

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
console.log(trimmedSentence); // Resultado: "Hola, mi nombre es Camila."

// Método repeat
const repeatedSentence = sentence.repeat(2);
console.log(repeatedSentence);
// Resultado:
// "Hola, mi nombre es Camila.Hola, mi nombre es Camila."



