// Jogo da Forca

const palavras = [
    // Lista de palavras (exemplo)
    "abacaxi", "anel", "amigo", "ave", "abacate",
    "bola", "bala", "banho", "bau", "banco",
    "casa", "cachorro", "carro", "cafe", "cama",
    "dado", "dedo", "doce", "dia", "dente",
    "elefante", "estrela", "escola", "elo", "escada",
    "faca", "festa", "fogo", "foca", "fada",
    // Adicione mais palavras aqui...
];

let palavraEscolhida;
let letrasCorretas;
let erros = 0;

// Função para escolher uma palavra aleatória
function escolherPalavra() {
    const index = Math.floor(Math.random() * palavras.length);
    palavraEscolhida = palavras[index];
    letrasCorretas = Array(palavraEscolhida.length).fill("_");
    erros = 0;
    atualizarTela();
    desenharBoneco(erros);
}

// Função para atualizar a tela com a palavra escondida
function atualizarTela() {
    const palavraAdivinhadaDiv = document.getElementById("palavraAdivinhada");
    palavraAdivinhadaDiv.innerHTML = letrasCorretas.join(" ");

    const botoesDiv = document.getElementById("botoesLetras");
    botoesDiv.innerHTML = "";  // Limpa botões anteriores

    for (let i = 0; i < 26; i++) {
        const letra = String.fromCharCode(65 + i).toLowerCase(); // 'a' até 'z'
        const botao = document.createElement("button");
        botao.textContent = letra;
        botao.addEventListener("click", () => adivinharLetra(letra));
        botoesDiv.appendChild(botao);
    }
}

// Função para verificar se a letra faz parte da palavra
function adivinharLetra(letra) {
    let acertou = false;

    for (let i = 0; i < palavraEscolhida.length; i++) {
        if (palavraEscolhida[i] === letra) {
            letrasCorretas[i] = letra;
            acertou = true;
        }
    }

    if (!acertou) {
        erros++;
    }

    atualizarTela();
    desenharBoneco(erros);

    if (erros === 6) {
        alert("Você perdeu! A palavra era: " + palavraEscolhida);
        escolherPalavra();
    }

    if (letrasCorretas.join("") === palavraEscolhida) {
        alert("Você venceu!");
        escolherPalavra();
    }
}

// Função para desenhar o boneco
function desenharBoneco(erros) {
    const canvas = document.getElementById("forcaCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas

    // Base
    if (erros > 0) {
        ctx.beginPath();
        ctx.moveTo(10, 190);
        ctx.lineTo(190, 190);
        ctx.stroke();
    }

    // Poste
    if (erros > 1) {
        ctx.beginPath();
        ctx.moveTo(50, 190);
        ctx.lineTo(50, 50);
        ctx.stroke();
    }

    // Suporte
    if (erros > 2) {
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(120, 50);
        ctx.stroke();
    }

    // Corda
    if (erros > 3) {
        ctx.beginPath();
        ctx.moveTo(120, 50);
        ctx.lineTo(120, 80);
        ctx.stroke();
    }

    // Cabeça
    if (erros > 4) {
        ctx.beginPath();
        ctx.arc(120, 100, 20, 0, Math.PI * 2);
        ctx.stroke();
    }

    // Corpo
    if (erros > 5) {
        ctx.beginPath();
        ctx.moveTo(120, 120);
        ctx.lineTo(120, 160);
        ctx.stroke();
    }

    // Braços
    if (erros > 6) {
        ctx.beginPath();
        ctx.moveTo(120, 130);
        ctx.lineTo(100, 150);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(120, 130);
        ctx.lineTo(140, 150);
        ctx.stroke();
    }

    // Pernas
    if (erros > 7) {
        ctx.beginPath();
        ctx.moveTo(120, 160);
        ctx.lineTo(100, 180);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(120, 160);
        ctx.lineTo(140, 180);
        ctx.stroke();
    }
}

// Adicionar funcionalidade de abas
document.getElementById("tab1").addEventListener("click", function () {
    document.getElementById("separarLetrasSection").classList.remove("hidden");
    document.getElementById("forcaSection").classList.add("hidden");
});

document.getElementById("tab2").addEventListener("click", function () {
    document.getElementById("separarLetrasSection").classList.add("hidden");
    document.getElementById("forcaSection").classList.remove("hidden");
    escolherPalavra(); // Iniciar o jogo da forca
});

document.getElementById("novaPalavraBtn").addEventListener("click", escolherPalavra);

// Função para separar letras (parte 1)
function separarLetras() {
    const palavra = document.getElementById("inputWord").value.trim();
    const lettersDiv = document.getElement
}