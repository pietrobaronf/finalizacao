
let totalSugestoes = 128;
let totalSolicitacoes = 42;

function abrirFormulario(tipo) {
    const titulo = tipo === "sugestao"
        ? "Enviar sugestão ou reclamação"
        : "Nova solicitação";

    document.getElementById("modalBody").innerHTML = `
        <h2>${titulo}</h2>
        <form onsubmit="enviarMensagem(event)">
            <input type="text" id="nome"
                placeholder="Seu nome" required>

            <input type="email" id="email"
                placeholder="Seu e-mail" required>

            <select id="categoria" required>
                <option value="">Selecione uma categoria</option>
                <option>Infraestrutura</option>
                <option>Meio ambiente</option>
                <option>Segurança</option>
                <option>Serviços públicos</option>
                <option>Outros</option>
            </select>

            <textarea id="mensagem"
                placeholder="Descreva sua sugestão ou reclamação..."
                required></textarea>

            <button type="submit">Enviar mensagem</button>
        </form>
    `;

    abrirModal();
}

function enviarMensagem(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const categoria = document.getElementById("categoria").value;
    const mensagem = document.getElementById("mensagem").value;

    totalSugestoes++;

    document.getElementById("totalSugestoes").textContent =
        totalSugestoes;

    alert(
        "Mensagem registrada na demonstração!\n" +
        "Obrigado pela participação, " + nome +
        ".\nCategoria: " + categoria +
        "\nSua mensagem: " + mensagem
    );

    fecharModal();
}

function abrirEnquete() {
    document.getElementById("modalBody").innerHTML = `
        <h2>🗳️ Votação comunitária</h2>
        <p>Qual melhoria deve ser prioridade?</p>
        <button onclick="votarModal('Iluminação')">💡 Iluminação</button>
        <button onclick="votarModal('Segurança')">🛡️ Segurança</button>
        <button onclick="votarModal('Lazer')">🌳 Áreas de lazer</button>
    `;

    abrirModal();
}

function votarModal(opcao) {
    alert("Seu voto de demonstração foi registrado: " + opcao);
    fecharModal();
}

function votar(botao, opcao) {
    document.querySelectorAll("#opcoesEnquete button")
        .forEach(b => b.disabled = true);

    botao.style.background = "#168447";
    botao.style.color = "white";

    document.getElementById("resultadoVoto").textContent =
        "Obrigado! Seu voto em '" + opcao + "' foi registrado na demonstração.";
}

function abrirAvaliacao() {
    document.getElementById("modalBody").innerHTML = `
        <h2>⭐ Avalie as ações das indústrias</h2>
        <p>Como você avalia as iniciativas realizadas?</p>

        <select id="nota">
            <option value="5">⭐⭐⭐⭐⭐ Excelente</option>
            <option value="4">⭐⭐⭐⭐ Bom</option>
            <option value="3">⭐⭐⭐ Regular</option>
            <option value="2">⭐⭐ Ruim</option>
            <option value="1">⭐ Muito ruim</option>
        </select>

        <textarea id="comentario"
            placeholder="Deixe seu comentário..."></textarea>

        <button onclick="enviarAvaliacao()">Enviar avaliação</button>
    `;

    abrirModal();
}

function enviarAvaliacao() {
    const nota = document.getElementById("nota").value;

    alert("Obrigado! Avaliação de " + nota +
        " estrela(s) registrada na demonstração.");

    fecharModal();
}

function abrirLogin() {
    document.getElementById("modalBody").innerHTML = `
        <h2>Entrar no ConectaBairro</h2>

        <form onsubmit="fazerLogin(event)">
            <input type="email" placeholder="Seu e-mail" required>
            <input type="password" placeholder="Sua senha" required>
            <button type="submit">Entrar</button>
        </form>

        <p>Bem-vindo à comunidade ConectaBairro!</p>
    `;

    abrirModal();
}

function fazerLogin(event) {
    event.preventDefault();
    alert("Login demonstrativo. Conecte um sistema de autenticação para habilitar o acesso.");
    fecharModal();
}

function abrirModal() {
    document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");

    if (event.target === modal) {
        fecharModal();
    }
};
