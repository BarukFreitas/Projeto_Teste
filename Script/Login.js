const usuarioPadrao = ('Admin');
const senhaPadrao = ('1234');
function menu() {
    let opcao = prompt('Bem vindo, Informe 1 para logar ou 2 para realizar cadastro');
        if(opcao == '1'){
            login_usuario();
            senha_usuario();
        }
}
function login_usuario() {
    let usuarioLogin = prompt('Insira seu nome de usuário: ');
    while (usuarioLogin != usuarioPadrao) {
    alert('Usuario incorreto, tente novamente: ');
    usuarioLogin = prompt('Insira seu nome de usuário: ');
    if (usuarioLogin === usuarioPadrao){
        break;   
    }
    }
}
function senha_usuario() {
    let senhaLogin = prompt('Insira a senha: ');
    while (senhaLogin != senhaPadrao ) {
        alert('Senha incorreta, tente novamente: ');
        senhaLogin = prompt('Insira sua senha: ');
        if (senhaLogin === senhaPadrao ){
            alert("Você está logado!");
        break;
        }
    }
}

function teste() {
    alert('Deu tudo certo!');
}
menu();
teste();
