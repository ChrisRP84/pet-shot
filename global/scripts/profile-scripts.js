var infoPet = sessionStorage.getItem('pet');

var divPet = document.getElementById('div-pet');

// console.log(spanInfoPet)

if (infoPet != null || infoPet != undefined){
    console.log('had value')
    document.getElementById('info-pet-cadastrado').textContent = "";
    document.getElementById('div-pet').style.display = 'block';
} else {
    document.getElementById('info-pet-cadastrado').textContent = 'Você não registrou nenhum pet.';
    document.getElementById('div-pet').style.display = 'none';
}

class Pet{
    nome;
    idade;
    tipo;
    raca;
    porte;

    constructor(nome, idade, tipo, raca, porte){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.raca = raca;
        history.porte = porte;
    }
}

var pet;

if (infoPet != null || infoPet != undefined){
    pet = JSON.parse(sessionStorage.getItem('pet'));
    document.getElementById('lbl-nome').textContent = "Nome: ".concat(pet.nome);
    document.getElementById('lbl-idade').textContent = "Idade: ".concat(pet.idade);
    document.getElementById('lbl-tipo').textContent = "Tipo: ".concat(pet.tipo);
    document.getElementById('lbl-raca').textContent = "Raça: ".concat(pet.raca);
    document.getElementById('lbl-porte').textContent = "Porte: ".concat(pet.porte);
}
