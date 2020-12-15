//Initial player
let jogadorAtual = "X";
let jogoFinalizado = false;

//Inserting the fields dynamically
let tabela = document.querySelector("#tableFundo");
for(let i = 0; i < 3; i++){
    let row = tabela.insertRow(i);
    for(let j = 0; j < 3; j++){
        let cell = row.insertCell(j);
        cell.innerHTML='<div id="div' + i + j + '" class="fundo_tabuleiro"></div>';
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
    if(elemento.innerHTML === "" && jogoFinalizado === false){
        elemento.innerHTML = jogadorAtual;
        verificarJogada();
    }
}

function verificarJogada(){
    //Verifying at same line
    for(let i = 0; i < 3; i++){
        if(document.getElementById("div" + i + "0").innerHTML === 
        document.getElementById("div" + i + "1").innerHTML &&
        document.getElementById("div" + i + "1").innerHTML ===
        document.getElementById("div" + i + "2").innerHTML &&
        document.getElementById("div" + i + "1").innerHTML !== ""){
            finalizaJogo("linha");
        }

        if(document.getElementById("div0" + i).innerHTML === 
        document.getElementById("div1" + i).innerHTML &&
        document.getElementById("div1" + i).innerHTML ===
        document.getElementById("div2" + i).innerHTML &&
        document.getElementById("div1" + i).innerHTML !== ""){
            finalizaJogo("coluna");
        }
    }

    //Verifying diagonals
    if(document.getElementById("div00").innerHTML === 
    document.getElementById("div11").innerHTML &&
    document.getElementById("div11").innerHTML ===
    document.getElementById("div22").innerHTML &&
    document.getElementById("div11").innerHTML !== ""){
        finalizaJogo("diagonal 1");
    }

    if(document.getElementById("div02").innerHTML === 
    document.getElementById("div11").innerHTML &&
    document.getElementById("div11").innerHTML ===
    document.getElementById("div20").innerHTML &&
    document.getElementById("div11").innerHTML !== ""){
        finalizaJogo("diagonal 2");
    }
        

    //Verifying if all the fields were checked
    allFieldsChecked() ? finalizaJogo() : togglePlayer();
}

function togglePlayer(){
    jogadorAtual = jogadorAtual === "X" ? "O" : "X";
    document.getElementById("jogadorAtual").innerText = "Vez do Jogador: " + jogadorAtual;
}

function finalizaJogo(message){
    document.getElementById("jogadorAtual").innerText = "FIM DE JOGO: " + message;
    jogoFinalizado = true;
}

function allFieldsChecked(){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(document.getElementById("div" + i + j).innerText === ""){
                return false;
            }
        }
    }
    return true;
}




