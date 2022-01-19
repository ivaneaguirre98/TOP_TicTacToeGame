const createPlayer = (name, marker) => {
    // console.log("createPlayer function is called");
    return {name, marker};
}


const gameBoard = (() => {
    // query selecting all elements that have a box class
    let squares = document.querySelectorAll(".box");
    // console.log(squares);

    //convert squares to an Array
    const boardArray = Array.from(squares);
    // console.log(boardArray);
    // console.log("gameBoard function is working");

    const createBoard = boardArray.forEach(element => {
        element.addEventListener("click", (e, index) =>{

            // game.checkBox(e);
            
            //calls function that enters marker to the gameboard
            game.enterMarker(e.target);

            game.checkGame(e.target);

            //calls function that switches player after marker is entered
            game.switchPlayer();

            game.removeSquare();


        }); //this limits event firing to one click. After click, it will no longer fire
    });

    return {boardArray, createBoard};

})();

const game = (() =>{
    // console.log("Game function is working");
    const player1 = createPlayer("Player 1", "X");
    const player2 = createPlayer("Player 2", "O");

    let activePlayer = player1;
    let roundWon = false;
    let gameLength = gameBoard.boardArray.length;

    let gameOverScreen = document.querySelector(".gameOverScreen");

    let resetButton = document.getElementById("restartButton");
    resetButton.addEventListener("click", resetBoard);


    function enterMarker(target){
        target.innerHTML = activePlayer.marker;
    }

    function switchPlayer(){
        // console.log("Switch Player function");
        if(activePlayer === player1){
            activePlayer = player2;
        }

        else{
            activePlayer = player1;
        }
    }

    function checkGame(target){
        // console.log("CheckGameFunctionCalled")
        const winningConditions  = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for(let i = 0; i <= 7; i++){
            const winCondition = winningConditions[i];
            const a = gameBoard.boardArray[winCondition[0]].innerHTML;
            const b = gameBoard.boardArray[winCondition[1]].innerHTML;
            const c = gameBoard.boardArray[winCondition[2]].innerHTML;

            if(a === "" || b === "" || c === ""){
                continue;
            }

            if(a === b && b === c){
                wonRound();
                break;
            }
        }
    }

    function removeSquare(){
        gameLength -= 1;

        if(gameLength <= 0){
            drawGame();
        }
        console.log(gameLength);
    }

    function drawGame(){
        console.log("Its a draw");
        gameOverScreen.style.display = "flex";
        let drawMessage = document.getElementById("gameWinnerAnnouce");
        drawMessage.innerHTML = "It was a Draw!";

    }

    function wonRound(){
        console.log("Round Won!");
        gameOverScreen.style.display = "flex";
        let winnerMessage = document.getElementById("gameWinnerAnnouce")
        winnerMessage.innerHTML = activePlayer.name + " is the winner!";
    }

    function resetBoard(){
        for(let i = 0; i < 9; i++){
            let square = gameBoard.boardArray[i];
            square.innerHTML = "";
            // console.log(square);
        }

        activePlayer = player1;

        gameLength = 9;
        gameOverScreen.style.display = "none";
    }

    return {
        activePlayer,
        switchPlayer,
        enterMarker,
        checkGame,
        removeSquare,
        resetBoard
    }

})();
