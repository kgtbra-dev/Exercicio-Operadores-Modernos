const aluno = {
  nota: 0
};

console.log(aluno.nota || 10);
console.log(aluno.nota ?? 10);

//Ira sair 10, e 0 na linha de baixo.
//Pois  o || é usado se o primeiro valor é false Já o ?? é quando a const for igual a null ou undefined, para podermos colocar uma mensagem como "Não informado"