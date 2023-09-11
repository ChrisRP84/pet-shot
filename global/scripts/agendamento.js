var nome = document.getElementById('agendamento-input-nome');
    var servico = document.getElementById('agendamento-servico-input-servico');
    var horario = document.getElementById('agendamento-servico-input-horario');
    var telebusca = document.getElementById('chk-tele-busca');
    var endereco = document.getElementById('agendamento-input-endereco');
    var numero = document.getElementById('agendamento-input-numero');
    var complemento = document.getElementById('agendamento-input-complemento');
    var bairro = document.getElementById('agendamento-input-bairro');
    var cidade = document.getElementById('agendamento-input-cidade');

class Agendamento{
    nome;
    servico;
    horario;
    telebusca;
    endereco;
    numero;
    complemento;
    bairro;
    cidade;

    constructor(nome, servico, horario, telebusca,
        endereco, numero, complemento, bairro, cidade){
            this.nome = nome;
            this.servico = servico;
            this.horario = horario;
            this.telebusca = telebusca;
            this.endereco = endereco;
            this.numero = numero;
            this.complemento = complemento;
            this.bairro = bairro;
            this.cidade = cidade;
        }
}

const opcaoLlogin = document.getElementById('serv-confirmar-agendamento');

opcaoLlogin.addEventListener('click', function(){
    var agendamento = new Agendamento(nome.value,
        servico.value,
        horario.value,
        telebusca.value,
        endereco.value,
        numero.value,
        complemento.value,
        bairro.value,
        cidade.value);

    sessionStorage.setItem('agendamento', JSON.stringify(agendamento));
    window.location.href = '../servico-agendado/servico-agendado.html'
})