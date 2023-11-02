const Pessoa = {
    nome: "Matheus",
    idade: 26,
    sexo: "M",
    like : ["Estudar", "Caminhar", "Dormir"],
    acao : function() { console.log(Pessoa["like"][1])}
}

Pessoa.acao()

