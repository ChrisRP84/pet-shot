const usuario_logado = sessionStorage.getItem('usuario_logado');
const lblEntrar = document.getElementById('label-entrar');
const opcaoLlogin = document.getElementById('label-entrar');

if (usuario_logado == 'true'){
    lblEntrar.textContent = "Bem vindo usuário"
}

opcaoLlogin.addEventListener('click', function(){
    if (usuario_logado == 'true'){
        window.location.href = "/account/profile.html";
    } else {
        window.location.href = "/login/login.html";
    }
});