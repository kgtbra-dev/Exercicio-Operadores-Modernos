const quantidade = 0;

console.log(quantidade || 10);
console.log(quantidade ?? 10);

//São resultados diferentes pois o || é usado se o primeiro valor é false
//Já o ?? é quando a const for igual a null ou undefined, para podermos colocar uma mensagem como "Não informado"