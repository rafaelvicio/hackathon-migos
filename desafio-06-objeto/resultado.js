const rafael = {
  nome: "Rafael",
  idade: 22
};

function apresentar(pessoa) {
  console.log(
    "Olá, meu nome é: " +
      pessoa.nome +
      " e tenho " +
      pessoa.idade +
      " anos de idade"
  );
}

console.log(rafael);
apresentar(rafael);
