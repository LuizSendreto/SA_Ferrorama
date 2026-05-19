function abrirPopup(nomeLinha, listaHorarios) {

    document.getElementById("tituloLinha").innerText =
        "Horários - " + nomeLinha;

    let html = "";

    listaHorarios.forEach(horario => {
        html += `<p>${horario}</p>`;
    });

    document.getElementById("horarios").innerHTML = html;

    document.getElementById("popup").style.display = "flex";
}

function fecharPopup() {
    document.getElementById("popup").style.display = "none";
}