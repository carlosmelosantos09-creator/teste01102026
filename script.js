// ================================
// BOTÃO PRINCIPAL
// ================================

const btnMensagem = document.getElementById("btnMensagem");

btnMensagem.addEventListener("click", function () {

    alert(
        "🌎 Muito bem! Aprender em um novo país leva tempo. " +
        "Continue praticando, faça perguntas e não tenha medo de errar!"
    );

});


// ================================
// BOTÃO DE AJUDA
// ================================

const btnAjuda = document.getElementById("btnAjuda");
const mensagemAjuda = document.getElementById("mensagemAjuda");

btnAjuda.addEventListener("click", function () {

    mensagemAjuda.textContent =
        "💙 Procure um professor, colega ou profissional da escola. Pedir ajuda é uma parte importante do aprendizado!";

    mensagemAjuda.classList.remove("hidden");

});


// ================================
// ANIMAÇÃO DOS CARDS
// ================================

const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {

    card.addEventListener("mouseenter", function() {
        card.style.transition = "0.3s";
    });

});


// ================================
// MENSAGEM NO CONSOLE
// ================================

console.log(
    "🌎 Bem-vindo ao projeto Aprender Juntos!"
);
