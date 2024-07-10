

function encriptarTexto() {
    let texto = document.getElementById('textarea__placeholde').value;
    var textoEncriptar = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector('#encriptado__eliminar').setAttribute('hidden', 'true');
    document.querySelector('#container__texto__mensaje__encriptado').removeAttribute('hidden');

    let parrafo = document.getElementById('textarea__mensaje__encriptado');
    parrafo.innerHTML = textoEncriptar;
    return;
} 


function desencriptarTexto() {
    let texto = document.getElementById('textarea__placeholde').value;
    let textoEncriptar = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector('#encriptado__eliminar').setAttribute('hidden', 'true');
    
    let parrafo = document.getElementById('textarea__mensaje__encriptado');
    parrafo.innerHTML = textoEncriptar;
    return;
}


function clipboardCopy(texto) {
    navigator.clipboard.writeText(texto).then(function() {
        
    }).catch(function(err) {
        
    });
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("copybutton").addEventListener("click", function() {
    clipboardCopy(document.getElementById('textarea__mensaje__encriptado').value);
  });
});

