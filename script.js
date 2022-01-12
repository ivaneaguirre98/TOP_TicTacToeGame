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
        element.addEventListener("click", (e) =>{
            //calls function that enters marker to the gameboard
            game.enterMarker(e.target);

            //calls function that switches player after marker is entered
            game.switchPlayer();

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
        console.log(target);
        target.innerHTML = activePlayer.marker;
    }

    function switchPlayer(){
        // console.log("Switch Player function");
        console.log(activePlayer);
        if(activePlayer === player1){
            activePlayer = player2;
        }

        else{
            activePlayer = player1;
        }
    }

    return {
        activePlayer,
        switchPlayer,
        enterMarker
    }

})();
