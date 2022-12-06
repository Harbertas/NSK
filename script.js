const firstPlayer = document.getElementById("firstPlayer");
const secondPlayer = document.getElementById("secondPlayer");
const submitButton = document.getElementById("submit");
const myForm = document.getElementById("form");
const playerIcon = document.querySelector(".icon");
const playerName = document.querySelector(".display-player");
const resetScore = document.querySelector("#resetScore");
let currentName = '';
let score = [0,0];
let newScore;

firstPlayer.addEventListener('keyup', check);
secondPlayer.addEventListener('keyup', check);
submitButton.addEventListener('click', () => {
	myForm.addEventListener('submit', function(e){
		e.preventDefault();
	})
	myForm.style.display = "none";
	game = document.getElementById("game");
	game.style.display = "grid";
	sessionStorage.setItem("player1", firstPlayer.value);
	sessionStorage.setItem("player2", secondPlayer.value);
	sessionStorage.setItem("score", score);
	playerName.innerHTML = sessionStorage.getItem("player1");
	currentName = sessionStorage.getItem('player1');
});

function check(){
	if(firstPlayer.value == secondPlayer.value || firstPlayer.value == '' || secondPlayer.value == '')
		submitButton.disabled = true;
	else{
		submitButton.disabled = false;
	}
	
}

window.addEventListener('DOMContentLoaded', () => {
	if(sessionStorage.player1 && sessionStorage.player2){
		myForm.style.display = "none";
		game.style.display = "grid";
		playerName.innerHTML = sessionStorage.getItem("player1");
		newScore = sessionStorage.getItem('score').split(',');
		document.querySelector('.player1').innerHTML = newScore[0];
		document.querySelector('.player2').innerHTML = newScore[1];
	}
	
	const tiles = Array.from(document.querySelectorAll('.tile'));
	const icon = document.querySelector("#icon");
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');
	
	let board = ['', '', '', '', '', '', '', '', ''];
	let currentPlayer = 'X';
	if(currentName == '')
		currentName = sessionStorage.getItem('player1');
	let isGameActive = true;
	
	const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';
	
	const winningConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	
    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i < 8; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

    if (roundWon) {
            announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }

    if (!board.includes(''))
        announce(TIE);
    };
	
    const announce = (type) => {
        switch(type){
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class="playerO">' + sessionStorage.getItem('player2') + ' (O)</span> Won';
				newScore = sessionStorage.getItem('score').split(',');
				newScore[1]++;
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Player <span class="playerX">' + sessionStorage.getItem('player1') + ' (X)</span> Won';
				newScore = sessionStorage.getItem('score').split(',');
				newScore[0]++;
				break;
            case TIE:
				newScore = sessionStorage.getItem('score').split(',');
                announcer.innerText = 'Tie';
        }
        announcer.classList.remove('hide');
		score = [newScore[0], newScore[1]];
		sessionStorage.setItem('score', score);
		document.querySelector('.player1').innerHTML = newScore[0];
		document.querySelector('.player2').innerHTML = newScore[1];
    };
	
	const isValidAction = (tile) => {
        if (tile.innerText === 'X' || tile.innerText === 'O'){
            return false;
        }
        return true;
    };
	
	const updateBoard = (index) => {
		board[index] = currentPlayer;
	};
	
	const changePlayer = () => {
		playerIcon.classList.remove(`player${currentPlayer}`);
		playerName.classList.remove(`player${currentPlayer}`);
		currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
		currentName = (currentName === sessionStorage.getItem("player1") ? sessionStorage.getItem("player2") : sessionStorage.getItem("player1"));
		playerIcon.innerText = "(" + currentPlayer + ")";
		playerName.innerText = currentName;
		playerIcon.classList.add(`player${currentPlayer}`);
		playerName.classList.add(`player${currentPlayer}`);
	};
	
	const userAction = (tile, index) => {
		if(isValidAction(tile) && isGameActive){
			tile.innerText = currentPlayer;
			tile.classList.add(`player${currentPlayer}`);
			updateBoard(index);
			handleResultValidation();
			changePlayer();
		}
	};
	
	const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');

        if (currentPlayer === 'O') {
            changePlayer();
        }

        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }
	
	tiles.forEach((tile, index) => {
		tile.addEventListener('click', () => userAction(tile, index))
	})
	
	resetButton.addEventListener('click', resetBoard);
	resetScore.addEventListener('click', () => {
		sessionStorage.removeItem("score");
		score = [0,0];
		sessionStorage.setItem("score", score);
		newScore = sessionStorage.getItem('score').split(',');
		document.querySelector('.player1').innerHTML = newScore[0];
		document.querySelector('.player2').innerHTML = newScore[1];
		resetBoard();
	});
});