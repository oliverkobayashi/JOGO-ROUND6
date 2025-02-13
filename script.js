function getAleatorioComputadorResultado() {
    const escolhas =["Pedra", "Papel", "Tesoura"];
    const aleatorioIndex = Math.floor(Math.random() * escolhas.length);
    return escolhas[aleatorioIndex];
}

function oJogadorGanhouARodada(jogador, computador) {
    return (
      (jogador =="Pedra" && computador == "Tesoura")||
      (jogador =="Tesoura" && computador =="Papel") ||
      (jogador =="Papel" && computador == "Pedra")
    );
}

let jogadorPonto = 0;
let computadorPonto = 0;

function getRodadaResultados(userEscolha){ 
const computadorResultado = getAleatorioComputadorResultado();

if(oJogadorGanhouARodada(userEscolha,computadorPonto)) {
    jogadorPonto++;
    return `Jogador ganhou! ${userEscolha} vence ${computadorResultado}`;
} else if(computadorResultado==userEscolha) {
    return `É um empate! Ambos escolheram ${userEscolha}`;
} else {
    computadorPonto `Computador ganhou! ${computadorResultado} vence ${userEscolha}`;
}
}

const jogadorPontoSpanElement = document.getElementById("jogador-ponto");
const computadorPontoSpanElement = document.getElementById("computador-ponto");
const rodadaResultadoMsg = document.getElementById("resultados-msg");
const ganhadorMsgElement = document.getElementById("vencedor-msg");
const escolhasContainer = document.getElementById("escolhas-container");
const resetJogoBtn = document.getElementById("reset-jogo-btn");

function showResultados(userEscolha) {
    rodadaResultadoMsg.innerText = getRodadaResultados(userEscolha);
    computadorPontoSpanElement.innerText = computadorPonto;
    jogadorPontoSpanElement.innerText =jogadorPonto;

    if(jogadorPonto===3 || computadorPonto ===3){
        ganhadorMsgElement.innerText= `${jogadorPonto===3?"Jogador" :"Computador"} venceu o jogo!`;

        resetJogoBtn.style.display ="block";
        escolhasContainer.style.display="none";
    }
};

function resetJogo(){

};

resetJogoBtn.addEventListener("click", resetJogo);

const pedraBtn = document.getElementById("pedra-btn");
const papelBtn = document.getElementById("papel-btn");
const tesouraBtn = document.getElementById("tesoura-btn");

pedraBtn.addEventListener("click", function () {
    showResultados("Pedra");
});

papelBtn.addEventListener("click", function(){
    showResultados("Papel");
});

tesouraBtn.addEventListener("click", function(){
    showResultados("Tesoura");
    });


