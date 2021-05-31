function playRound(playerSelection, computerSelection){
    if ((playerSelection == "rock" && computerSelection == "scissor") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissor" && computerSelection == "paper")){
        console.log(`You have won. The computer selected: ${computerSelection}.`);
        return 1;
    } 
    
    else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissor") || (playerSelection == "scissor" && computerSelection == "rock")){
        console.log(`You have lost. The computer selected: ${computerSelection}.`);
        return -1;
    } 
    
    else if ((playerSelection == "paper" && computerSelection == "paper") || (playerSelection == "scissor" && computerSelection == "scissor") || (playerSelection == "rock" && computerSelection == "rock")){
        console.log(`It's a tie. The computer also selected: ${computerSelection}.`);
    } 
    return 0;
}

function computerSelec(){
    let list = ["rock","paper","scissor"];
    let op = Math.round(((Math.random())  * 3));
    while (op == 3){
        op = Math.round(((Math.random())  * 3)); 
    }
    return list[op];
}

function game(){
    let pc = 0;
    let vos = 0;

    let player = prompt("Select rock paper or scissor");

    player = player.toLowerCase();

    let computer = computerSelec();

    let result = playRound(player, computer);

    if (result == "1"){
        vos += 1;
    } else if (result == "-1"){
        pc += 1;
    }

    while ((vos != 5) && (pc != 5)){
        player = prompt("Select rock paper or scissor");

        player = player.toLowerCase();

        computer = computerSelec();

        result = playRound(player, computer);

        if (result == 1){
            vos += 1;
        } else if (result == -1){
            pc += 1;
        }
    }

    if(vos == 5){
        console.log('You have won.');
    } else if (pc == 5){
        console.log('The pc have won');
    }


}


game();


