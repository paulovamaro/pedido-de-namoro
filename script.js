// script.js

// Redirecionar para o contrato de namoro
document.getElementById("sim").addEventListener("click", function() {
    document.querySelector(".pagina-inicial").style.display = "none";
    document.getElementById("contrato").style.display = "block";
    document.getElementById("contrato").style.animation = "fadeIn 1s forwards";
});

// Função para mover o botão "Não"
let botaoNao = document.getElementById("nao");

botaoNao.addEventListener("mouseover", function() {
    let deslocamentoX = Math.random() * 200 - 100; // Movimenta de forma aleatória horizontal
    let deslocamentoY = Math.random() * 100 - 50; // Movimenta de forma aleatória vertical
    botaoNao.style.transform = `translate(${deslocamentoX}px, ${deslocamentoY}px)`;
});

// Habilitar o botão "Aceito" somente quando o coração estiver marcado
const checkbox = document.getElementById("coracao");
const botaoAceito = document.getElementById("aceito");

checkbox.addEventListener("change", () => {
    botaoAceito.disabled = !checkbox.checked; // Habilita o botão se marcado
});

// Clique no botão "Aceito"
botaoAceito.addEventListener("click", function() {
    document.getElementById("contrato").style.display = "none";
    document.getElementById("animacao").style.display = "block";
    document.getElementById("animacao").style.animation = "fadeIn 1s forwards";

    // Aqui você pode adicionar uma lógica para saber que ela aceitou (ex: enviar para um servidor ou notificação)
    alert("Você aceitou o pedido de namoro! 🎉");
});

// Envio de email"
document.getElementById("aceito").addEventListener("click", async () => {
    const email = "paulovamaro@gmail.com"; // Email da Wendy
    const nome = "Wendy Pertel"; // Nome da Wendy

    // Fazer requisição ao backend
    try {
        const response = await fetch("https://pedido-de-namoro-1fcc74a7a0be.herokuapp.com/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, nome }),
        });

        if (response.ok) {
            alert("Confira seu E-mail!");
            document.getElementById("animacao").style.display = "block";
        } else {
            alert("Erro ao enviar o email. Tente novamente mais tarde.");
        }
    } catch (error) {
        console.error("Erro:", error);
    }
});
