const senha_padrao = '123';
const login_padrao = 'admin';
const email_padrao = 'admin@gmail.com'

var email = document.getElementById('email').value;
var login = docuument.getElementById('login').value;
var senha = document.getElementById('senha').value;


function validacao(){
    var email = document.getElementById('email').value;
    var login = docuument.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (email === email_padrao){
        alert("Email já cadastrado");
        } else {
            if(login == login_padrao){
                alert("Login já cadastrado")
                }else{
                    if(senha != senha_padrao){
                        alert ("Senhas não conferem!")
                    }
            }
    }
}