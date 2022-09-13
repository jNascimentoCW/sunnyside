let sobre = document.querySelector(".sobre-btn");
let popUpSobre = document.querySelector(".pop-up-sobre");
let fecharSobre = document.querySelector(".fechar-sobre");

let servicos = document.querySelector(".servicos-btn");
let popUpServicos = document.querySelector(".pop-up-servicos");
let fecharServicos = document.querySelector(".fechar-servicos");

sobre.addEventListener("click", function(){
    popUpSobre.style.visibility = "visible";
    document.querySelector("*").style.overflow = "hidden";
});

fecharSobre.addEventListener("click", function(){
    popUpSobre.style.visibility = "hidden";
    document.querySelector("*").style.overflow = "visible";
})

servicos.addEventListener("click", function(){
    popUpServicos.style.visibility = "visible";
    document.querySelector("*").style.overflow = "hidden";
});

fecharServicos.addEventListener("click", function(){
    popUpServicos.style.visibility = "hidden";
    document.querySelector("*").style.overflow = "visible";
})