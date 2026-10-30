function atualizarRelogio() {
    const data_atual = new Date()
    const hora = data_atual.getHours().toString().padStart(2, "0")
    const minuto = data_atual.getMinutes().toString().padStart(2, "0")
    const segundo = data_atual.getSeconds().toString().padStart(2, "0")
    const horario_formatado = `${hora}:${minuto}:${segundo}`
    const elemento = document.getElementById("relogio")
    elemento.textContent = horario_formatado
    atualizarSaudacao();
}

// Aqui tá ok!
function atualizarSaudacao() {
    const saudacao = document.getElementById("saudacao");
    const data_atual = new Date()
    const hora = data_atual.getHours()
    if (hora >= 5 && hora < 12) {
        saudacao.textContent = "Bom dia!"
    } else if (hora >= 12 && hora < 18) {
        saudacao.textContent = "Boa tarde!"
    } else {
        saudacao.textContent = "Boa noite!"
    }
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);
