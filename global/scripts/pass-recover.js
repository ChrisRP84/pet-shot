var btnRecover = document.getElementById('button-recover');
var email = document.getElementById('email');
var spanEmail = document.getElementById('span-email');

spanEmail.style.display = 'none';

btnRecover.addEventListener('click', function(){
    if (email.value === '' || email.value === undefined){
        spanEmail.style.display = 'block';
    } else {
        spanEmail.style.display = 'none';
        window.location.href='../pass-recover/pass-recovered.html'
    }
})