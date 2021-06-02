function computerSelec(){
    let list = ["rock","paper","scissor"];
    let op = Math.floor(Math.random() * list.length);
    return list[op];
}

function removeTransition(e){
    let botontest = document.getElementById(`${e.target.id}`);
    if(e.propertyName !== 'box-shadow') return;
    botontest.classList.replace("selected","hoverbt");
  }

function userSelec(e){
    let userT = document.getElementById(`${e.target.id}`);
    let pcT = computerSelec();
    userT.classList.replace("hoverbt","selected");
    userT.addEventListener('transitionend', removeTransition);
    let sentT = userT.id;
    let secuen = evaluate(sentT, pcT);
    tableScore(secuen);
}

function evaluate (playerSelection,computerSelection){
    const textScore = document.getElementById("text-result");
    if ((playerSelection == "rock" && computerSelection == "scissor") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissor" && computerSelection == "paper")){
        textScore.textContent = `You have won. The computer selected: ${computerSelection}.`;
        return "win"
    } 
    
    else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissor") || (playerSelection == "scissor" && computerSelection == "rock")){
        textScore.textContent = `You have lost. The computer selected: ${computerSelection}.`;
        return "lost"
    } 
    
    else if ((playerSelection == "paper" && computerSelection == "paper") || (playerSelection == "scissor" && computerSelection == "scissor") || (playerSelection == "rock" && computerSelection == "rock")){
        textScore.textContent = `It's a tie. The computer also selected: ${computerSelection}.`;
        return "tie"
    } 
}

function tableScore(val1){
    const ulPc = document.getElementById('score-pc');
    const ulU = document.getElementById('score-hum');
    let liPc = document.getElementById('li-pc');
    let liU = document.getElementById('li-hum');
    if (val1 == "win"){
        valU += 1
        liU.textContent = `${valU}`;
        liPc.textContent = `${valPc}`;
    } else if (val1 == "lost"){
        valPc += 1
        liPc.textContent = `${valPc}`;
        liU.textContent = `${valU}`;
    } else {
        liPc.textContent = `${valPc}`;
        liU.textContent = `${valU}`;
    }  

    if (valPc == 5 || valU == 5){
        container.classList.add('hidden');
        if (valPc > valU){
            pFinal.textContent = `Sorry, you have lost. The score finished ${valU} - ${valPc}`;
        } else {
            pFinal.textContent = `Congrats, you have won! The score finished ${valU} - ${valPc}`;
        }
        pFinal.classList.remove('hidden');
        bFinal.classList.remove('hidden');
    }
}

function restart(){
    let liPc = document.getElementById('li-pc');
    let liU = document.getElementById('li-hum');
    container.classList.remove('hidden');
    pFinal.classList.add('hidden');
    bFinal.classList.add('hidden');
    valPc = 0;
    valU = 0;
    liPc.textContent = `${valPc}`;
    liU.textContent = `${valU}`;
    btn.forEach((button) => {
        if (button.classList.contains("selected")){
            button.classList.replace("selected","hoverbt")
        }
    });
}


const bFinal = document.getElementById('boton-final');
const container = document.getElementById('container');
const pFinal = document.getElementById('resultado-text');

bFinal.addEventListener('click',restart);


let valPc = 0;
let valU = 0;
const btn = Array.from(document.querySelectorAll(`.botones`));
btn.forEach((button) => button.addEventListener('click', userSelec));



