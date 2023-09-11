const opcaoLlogin = document.getElementById('label-entrar');

const usuario_logado = sessionStorage.getItem('usuario_logado');

opcaoLlogin.addEventListener('click', function(){
    if (usuario_logado == 'true'){
        window.location.href('/login/loggedin.html');
    } else {
        window.location.href('/login/login.html')
    }
});