let botao = document.getElementById("botao");
let mensagem = document.getElementById("mensagem");

botao.onclick= msg();

function msg(){
    mensagem.innerHTML = "Seja bem-vindo à minha página!";
}