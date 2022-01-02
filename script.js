function computerSelec() {
	let list = ['rock', 'paper', 'scissor']
	let op = Math.floor(Math.random() * list.length)
	return list[op]
}

function userSelec(e) {
	let variable
	if (e.target.id != '') {
		variable = e.target.id
	} else {
		variable = e.originalTarget.parentElement.id
	}
	let userT = document.getElementById(variable)
	let pcT = computerSelec()
	let sentT = userT.id
	let secuen = evaluate(sentT, pcT)
	tableScore(secuen)
}

function evaluate(playerSelection, computerSelection) {
	const textScore = document.getElementById('text-result')
	if (
		(playerSelection == 'rock' && computerSelection == 'scissor') ||
		(playerSelection == 'paper' && computerSelection == 'rock') ||
		(playerSelection == 'scissor' && computerSelection == 'paper')
	) {
		textScore.textContent = `You have won. The computer selected: ${computerSelection}.`
		return 'win'
	} else if (
		(playerSelection == 'rock' && computerSelection == 'paper') ||
		(playerSelection == 'paper' && computerSelection == 'scissor') ||
		(playerSelection == 'scissor' && computerSelection == 'rock')
	) {
		textScore.textContent = `You have lost. The computer selected: ${computerSelection}.`
		return 'lost'
	} else if (
		(playerSelection == 'paper' && computerSelection == 'paper') ||
		(playerSelection == 'scissor' && computerSelection == 'scissor') ||
		(playerSelection == 'rock' && computerSelection == 'rock')
	) {
		textScore.textContent = `It's a tie. The computer also selected: ${computerSelection}.`
		return 'tie'
	}
}

function tableScore(val1) {
	let screenWin = document.getElementById('final')
	let liPc = document.getElementById('li-pc')
	let liU = document.getElementById('li-hum')
	if (val1 == 'win') {
		valU += 1
		liU.textContent = `${valU}`
		liPc.textContent = `${valPc}`
	} else if (val1 == 'lost') {
		valPc += 1
		liPc.textContent = `${valPc}`
		liU.textContent = `${valU}`
	} else {
		liPc.textContent = `${valPc}`
		liU.textContent = `${valU}`
	}

	if (valPc == 5 || valU == 5) {
		screenWin.classList.add('showFinal')
		if (valPc > valU) {
			pFinal.textContent = `Sorry, you have lost. The score finished ${valU} - ${valPc}`
		} else {
			pFinal.textContent = `Congrats, you have won! The score finished ${valU} - ${valPc}`
		}
	}
}

function restart() {
	let screenWin = document.getElementById('final')
	const textScore = document.getElementById('text-result')
	textScore.textContent = ''
	let liPc = document.getElementById('li-pc')
	let liU = document.getElementById('li-hum')
	valPc = 0
	valU = 0
	liPc.textContent = `${valPc}`
	liU.textContent = `${valU}`
	screenWin.classList.remove('showFinal')
}

const bFinal = document.getElementById('boton-final')
const container = document.getElementById('container')
const pFinal = document.getElementById('resultado-text')

bFinal.addEventListener('click', restart)

let valPc = 0
let valU = 0
const btn = Array.from(document.querySelectorAll(`.botones`))
btn.forEach(button => button.addEventListener('click', userSelec))
