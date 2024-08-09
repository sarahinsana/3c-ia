const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a principal diferença entre o vôlei de quadra e o vôlei de praia em termos de regras e ambiente de jogo?",
        alternativas: [
            {
                texto: "O vôlei de quadra é jogado em um ambiente fechado com seis jogadores em cada equipe e um sistema de três toques por equipe, enquanto o vôlei de praia é jogado ao ar livre com duas equipes de dois jogadores e um sistema de dois toques por equipe.",
                afirmacao: "No vôlei de quadra, o jogo ocorre em ambientes fechados com seis jogadores em cada time e permite três toques por equipe antes de passar a bola para o time adversário. No vôlei de praia, o jogo ocorre ao ar livre com duas equipes de dois jogadores e apenas três toques são permitidos por equipe.) "
            },
            {
                texto: "O vôlei de praia é jogado em uma quadra coberta com seis jogadores em cada equipe, enquanto o vôlei de quadra é jogado ao ar livre com apenas dois jogadores por equipe.",
                afirmacao: "Isso está incorreto, pois o vôlei de praia é jogado ao ar livre com apenas dois jogadores por equipe, e o vôlei de quadra é jogado em ambientes fechados com seis jogadores em cada equipe."
            }
        ]
    },
    {
        enunciado: "Como o vôlei contribui para a promoção da cultura esportiva em diferentes regiões?",
        alternativas: [
            {
                texto: "O vôlei, como esporte coletivo, promove a integração social e cultural, oferecendo oportunidades para pessoas de diferentes origens se reunirem em torneios locais e internacionais.",
                afirmacao: "O vôlei promove a integração social e cultural ao reunir pessoas de diferentes origens em eventos esportivos, incentivando o intercâmbio cultural e o espírito de equipe."
            },
            {
                texto: "O vôlei tem pouco impacto na promoção da cultura esportiva, pois é um esporte que não atrai a participação de diversos grupos etários e culturais.",
                afirmacao: "Na verdade, o vôlei tem um impacto significativo na promoção da cultura esportiva, pois é praticado por pessoas de várias idades e origens culturais em todo o mundo.)"
            }
        ]
    },
    {
        enunciado: "Qual é o papel dos eventos internacionais de vôlei, como os Jogos Olímpicos, na popularização do esporte globalmente?",
        alternativas: [
            {
                texto: "Eventos internacionais como os Jogos Olímpicos ajudam a aumentar a visibilidade do vôlei, atraindo espectadores e patrocinadores e incentivando a prática do esporte em diferentes países.",
                afirmacao: "Os Jogos Olímpicos e outros eventos internacionais de vôlei desempenham um papel importante em aumentar a visibilidade do esporte, promovendo-o globalmente e estimulando o interesse e a participação em vários países.)"
            },
            {
                texto: "Esses eventos têm pouco impacto na popularização do vôlei, pois o esporte é mais promovido por eventos locais e regionais.",
                afirmacao: "Embora eventos locais e regionais também sejam importantes, eventos internacionais como os Jogos Olímpicos têm um impacto significativo na popularização do vôlei ao alcançar uma audiência global e gerar interesse internacional.)"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Explicação...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
