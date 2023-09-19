

var btnCriarConta = document.getElementById('button-criar');
var email = document.getElementById('email');
var senha = document.getElementById('password');
var resenha = document.getElementById('re-password');
var spanSenha = document.getElementById('span-senha');

spanSenha.style.display = 'none';

btnCriarConta.addEventListener('click', function(){
    if (senha.value === '' || senha.value === undefined ||
        resenha.value === '' || resenha.value === undefined){
            spanSenha.textContent = 'É necessário Informar a senha!';
            spanSenha.style.display = 'block';
    } else if (senha.value != resenha.value){
        spanSenha.textContent = 'As senhas não conferem!';
        spanSenha.style.display = 'block';
    } else {
        spanSenha.style.display = 'none';
        window.location.href='../account/account-created/account-created.html';
    }
})