const botaoLogar = document.getElementById("button-logar");

botaoLogar.addEventListener('click', function() {
    var usuario_logado = true;
    sessionStorage.setItem('usuario_logado', usuario_logado);
    window.location.href = '../index.html';
});