/*As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"*/

let btnCriptografar = document.getElementById('btn-criptografar');
let btnDescriptografar = document.getElementById('btn-descriptografar');
let displayMensagem = document.getElementById('texto-codificado');
let btnCopiar = document.getElementById('btn-copiar');
let inputArea = document.getElementById('texto-digitado');
let hideArea1 = document.getElementById('content-nao-interativo');
let hideArea2 = document.getElementById('content-interativo');

function criptografar(){
    var texto;
    var resultadoCriptografia;
    texto = inputArea.value;

    resultadoCriptografia = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    displayMensagem.value = resultadoCriptografia;
    hideArea1.style.display = "none";
    hideArea2.style.display = "flex";

    inputArea.value = "";
}

function descriptografar(){
    var texto;
    var resultadoDescriptografia;
    texto = inputArea.value;

    resultadoDescriptografia = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    displayMensagem.value = resultadoDescriptografia;
    inputArea.value = "";
}

function copiarTexto(){
    navigator.clipboard.writeText(displayMensagem.value);
    displayMensagem.value = "";
}

btnCriptografar.addEventListener("click", criptografar);
btnDescriptografar.addEventListener("click", descriptografar);
btnCopiar.addEventListener("click", copiarTexto);