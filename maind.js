function verifica(){
    var login = document.getElementById("login").value
    var senha = document.getElementById("senha").value

    if(login==""&&senha==""){
        alert("Digite o Usuário ou a senha")
    } else if (login!="Carolina"&&senha!="1234"){
        alert("Login e senha incorretos")
    }else 
    if(login=="Carolina"&&senha=="1234"){
        alert("Seja bem vindo ao sistema")
    }
}