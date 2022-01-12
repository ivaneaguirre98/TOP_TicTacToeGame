const createPlayer = (name, marker) => {
    console.log("createPlayer function is called");
    return {name, marker};
}


const gameBoard = (() => {
    // query selecting all elements that have a box class
    let squares = document.querySelectorAll(".box");
    // console.log(squares);

    //convert squares to an Array
    const boardArray = Array.from(squares);
    // console.log(boardArray);
    console.log("gameBoard function is working");

    boardArray.forEach(element => {
        element.addEventListener("click", (e, index) =>{
            //calls function that enters marker to the gameboard
            game.enterMarker(e.target);

            //calls function that switches player after marker is entered
            game.switchPlayer();

            game.checkGame(e.target);

        }, {once:true}); //this limits event firing to one click. After click, it will no longer fire
    });

    return {boardArray};

})();

const game = (() =>{
    console.log("Game function is working");
    const player1 = createPlayer("Player 1", "X");
    const player2 = createPlayer("Player 2", "O");

    let activePlayer = player1;

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
        console.log("CheckGameFunctionCalled")
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
                console.log("Round Won!");
                break;
            }
        }

    }

    return {
        activePlayer,
        switchPlayer,
        enterMarker,
        checkGame
    }

})();
