function comprimirSubContaineres(numero) {

    const subContaineres = document.getElementById("subContaineresCurso" + numero);
    subContaineres.style.display = "none";

    const setaDireita = document.getElementById("setaD" + numero);
    setaDireita.style.display = "block";

    const setaBaixo = document.getElementById("setaB" + numero);
    setaBaixo.style.display = "none";

    document.getElementById("botao" + numero).onclick = function() {expandirSubContaineres(numero)};

}



function expandirSubContaineres(numero) {

    const subContaineres = document.getElementById("subContaineresCurso" + numero);
    subContaineres.style.display = "block";

    const setaDireita = document.getElementById("setaD" + numero);
    setaDireita.style.display = "none";

    const setaBaixo = document.getElementById("setaB" + numero);
    setaBaixo.style.display = "block";

    document.getElementById("botao" + numero).onclick = function() {comprimirSubContaineres(numero)};

}