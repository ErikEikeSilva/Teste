function login(){

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const mensagem = document.getElementById("mensagem");

    if(usuario === "admin" && senha === "123"){
        mensagem.innerHTML = "Login realizado com sucesso";
    }else{
        mensagem.innerHTML = "Usuário ou senha inválidos";
    }

}