//const Pessoa = {
//    nome: "Matheus",
//    idade: 26,
//    sexo: "M",
//    like : ["Estudar", "Caminhar", "Dormir"],
//    acao : function() { console.log(Pessoa["like"][1])}
//}

//Pessoa.acao()

function somar(valor){
    return valor + 10;
}






//teste = (a) => 2023-a;
//console.log(teste(26));

//teste = (a) => 2023-a;
//console.log(teste(1997));


let array = [
    {
      id: 1,
      name: 'John',
      age: 23,
    },
    {
      id: 2,
      name: 'Samuel',
      age: 21,
    },
    {
      id: 3,
      name: 'marvin',
      age: 26,
    },
    {
      id: 4,
      name: 'james',
      age: 28,
    },
  ];

const resultado  = array.map((resposta) => {
    if (resposta.name == 'John'){
        resposta.idade = reposta.age + 10;
    }
    return '';

});

console.log(resultado)