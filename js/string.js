let double = "hshsjsj8d";
let simples = '35hgyfQ';
let backticks = `rye6+`;

let lista_invitados = `Ìnvitados:
* Maria
* Juan
* Pedro
* Miguel
* Diana
`;

//alert(lista_invitados);

// caracteres especiales \

/*
\n -> nueva linea, salo de linea
\t -> Tabulacion
\\ -> Backslash
\',\",\` -> cada una de las comillas 
*/

console.log("Hola\nMundo");
lista_invitados = "Ìnvitados:\n* Maria\t * Juan\t* Pedro\t* Miguel\t* Diana";
console.log(lista_invitados);

// Longitud de cadenas

console.log("123".length);
console.log("Mi\n".length);

let str = `Hola`;

console.log(str[0]);
console.log(str.charAt[0]);
console.log(str[-2]);
console.log(str.at(-2));

// for .. of 

for(let char of "Hola"){
    console.log(char);
}

console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());
str = "hola";
console.log(str[0].toUpperCase());
