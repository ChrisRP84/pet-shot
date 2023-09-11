const buttonCadPed = document.getElementById('cad-pet-confirmar-cadastro');

const nome = document.getElementById('cad-pet-input-nome');
const idade = document.getElementById('cad-pet-input-idade');
const tipo = document.getElementById('cad-pet-input-tipo');
const raca = document.getElementById('cad-pet-input-raca');
const porte = document.getElementById('cad-pet-input-porte');

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
        this.porte = porte;
    }
}

buttonCadPed.addEventListener('click', function(){
    let pet = new Pet(nome.value, idade.value, tipo.value, raca.value, porte.value);
    sessionStorage.setItem('pet', JSON.stringify(pet));
    alert('Pet cadastrado com sucesso!');
    window.location.href = "/account/profile.html"
})