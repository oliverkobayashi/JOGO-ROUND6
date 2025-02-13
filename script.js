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



