//Initial prompts
let jogador1 = prompt("Player 1, please enter your name:","X");
let jogador2 = prompt("Player 2, please enter your name:","O");

//Constants
const VAZIO = "";
const COLOR_VICTORY = "rgb(179,238,58)";
const COLOR_NORMAL = "white"; 
//Initial player
if(jogador1 === null || jogador1 === VAZIO) jogador1 = "X";
if(jogador2 === null || jogador2 === VAZIO) jogador2 = "O";
let jogadorAtual = jogador1;
let jogoFinalizado = false;
//Blocks used in-game
let bloco1;
let bloco2;
let bloco3;

document.getElementById("jogadorAtual").innerText = jogadorAtual + "'s turn";


//Inserting the fields dynamically
let tabela = document.querySelector("#tableFundo");
for(let i = 0; i < 3; i++){
    let row = tabela.insertRow(i);
    for(let j = 0; j < 3; j++){
        let cell = row.insertCell(j);
        cell.innerHTML='<div id="div' + i + j + '" class="fundo_tabuleiro marcacao corBlocoNormal"></div>';
    }
}

//Inserting listeners in each DIV dynamically
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        document.getElementById("div" + i + j).addEventListener("click", function(){
            efetuarJogada(this);
        });
    }
}

function efetuarJogada(elemento){
    if(elemento.innerHTML === VAZIO && jogoFinalizado === false){
        elemento.innerHTML = jogadorAtual === jogador1 ? "X" : "O";
        verificarJogada();
    }
}

function verificarJogada(){
    //Verifying at same line

    for(let i = 0; i < 3; i++){
        bloco1 = document.getElementById("div" + i + "0");
        bloco2 = document.getElementById("div" + i + "1");
        bloco3 = document.getElementById("div" + i + "2");
        if(bloco1.innerHTML === 
        bloco2.innerHTML &&
        bloco2.innerHTML ===
        bloco3.innerHTML &&
        bloco2.innerHTML !== VAZIO){
            finalizaJogo();
        }

        bloco1 = document.getElementById("div0" + i);
        bloco2 = document.getElementById("div1" + i);
        bloco3 = document.getElementById("div2" + i);
        if(bloco1.innerHTML === 
        bloco2.innerHTML &&
        bloco2.innerHTML ===
        bloco3.innerHTML &&
        bloco2.innerHTML !== VAZIO){
            finalizaJogo();
        }
    }

    //Verifying diagonals
    bloco1 = document.getElementById("div00");
    bloco2 = document.getElementById("div11");
    bloco3 = document.getElementById("div22");
    if(bloco1.innerHTML === 
        bloco2.innerHTML &&
        bloco2.innerHTML ===
        bloco3.innerHTML &&
        bloco2.innerHTML !== VAZIO){
        finalizaJogo();
    }

    bloco1 = document.getElementById("div02");
    bloco2 = document.getElementById("div11");
    bloco3 = document.getElementById("div20");
    if(bloco1.innerHTML === 
        bloco2.innerHTML &&
        bloco2.innerHTML ===
        bloco3.innerHTML &&
        bloco2.innerHTML !== VAZIO){
        finalizaJogo();
    }
        

    //Verifying if all the fields were checked
    allFieldsChecked() && !jogoFinalizado ? finalizaJogo("Draw") : togglePlayer();
}

function togglePlayer(){
    if(!jogoFinalizado){
        jogadorAtual = jogadorAtual === jogador1 ? jogador2 : jogador1;
        document.getElementById("jogadorAtual").innerText = jogadorAtual + "'s turn";
    }
}

function finalizaJogo(message){
    if(message !== "Empate") paintBlocks();
    document.getElementById("jogadorAtual").innerText = "Endgame: " + (message === undefined ? jogadorAtual + "'s Victory" : message);
    jogoFinalizado = true;
}

function paintBlocks(empate){
    bloco1.style.backgroundColor = COLOR_VICTORY;
    bloco2.style.backgroundColor = COLOR_VICTORY;
    bloco3.style.backgroundColor = COLOR_VICTORY;
}

function allFieldsChecked(){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(document.getElementById("div" + i + j).innerText === VAZIO){
                return false;
            }
        }
    }
    return true;
}

function clearFields(){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            let bloco = document.getElementById("div" + i + j);
            bloco.innerText="";
            bloco.style.backgroundColor = "white";
        }
    }
    
    jogoFinalizado = false;
    togglePlayer();
}



