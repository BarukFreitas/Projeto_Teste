var usuario = [login, email, senha];
const senha_padrao = '123';
const login_padrao = 'admin';
function validacao() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById('senha').value;

    if  (login === 'admin' && senha === '1234') {
        alert('Login bem sucedido');
        window.location.href = 'index.html';
        return false;
    }
    else {
        alert('Login ou senha incorretos, tente novamente.');
        return false;
    }
};
function teste(){
    alert('ta tudo dando certo')
}
