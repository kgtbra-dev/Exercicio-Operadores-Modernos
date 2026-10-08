const usuario = {
  nome: "",
  idade: 0,
  endereco: null
};

console.log(usuario.nome || "Visitante"); // "Visitante"
console.log(usuario.nome ?? "Visitante"); // ""
console.log(usuario.idade || 18); // 18
console.log(usuario.idade ?? 18); // 0
console.log(usuario.endereco?.cidade); // undefined
console.log(usuario.endereco?.cidade ?? "Sem cidade"); // "Sem cidade"

 