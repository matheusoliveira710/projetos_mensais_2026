let valor = 0;
const aumentar = document.getElementById("aumentar");
const retirar = document.getElementById("retirar");
const resetar = document.getElementById("resetar");
const contador = document.getElementById("contador");

aumentar.addEventListener("click", () => {
    valor++;
    contador.textContent = valor;
});

retirar.addEventListener("click", () => {
    if (valor === 0) {
        alert("O valor não pode ser menor que 0!");
    }
    else {
        valor--;
        contador.textContent = valor;
    }
});

resetar.addEventListener("click", () => {
    valor = 0;
    contador.textContent = valor;
});
