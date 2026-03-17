// OBJETO PRINCIPAL

const usuario = {
  nome: "Matheus",
  idade: 25,
  ativo: true,
  hobbies: ["futebol", "academia", "games"]
};

console.log("Objeto original:");
console.log(usuario);

// ITERAÇÃO COM for...in (OBJETO)

console.log("\nIterando propriedades do objeto:");

for (let chave in usuario) {
  console.log(chave + ":", usuario[chave]);
}

// ITERAÇÃO COM for...of (ARRAY)

console.log("\nIterando hobbies (array dentro do objeto):");

for (let hobby of usuario.hobbies) {
  console.log(hobby);
}

// COMPARAÇÃO DE REFERÊNCIA

console.log("\nComparação de objetos:");

const usuario2 = usuario;

console.log("usuario === usuario2 ?", usuario === usuario2); // true

// CÓPIA POR REFERÊNCIA

console.log("\nAlterando cópia por referência:");

usuario2.nome = "João";

console.log("usuario.nome:", usuario.nome); // João
console.log("usuario2.nome:", usuario2.nome); // João

// CÓPIA COM SPREAD OPERATOR

console.log("\nCópia com spread operator:");

const usuario3 = { ...usuario };

usuario3.nome = "Carlos";

console.log("usuario.nome:", usuario.nome); // João
console.log("usuario3.nome:", usuario3.nome); // Carlos

// TRANSFORMANDO EM JSON

console.log("\nConvertendo para JSON:");

const usuarioJSON = JSON.stringify(usuario);

console.log(usuarioJSON);
