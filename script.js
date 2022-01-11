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
            console.log("You clicked Square ");
        })
    })


    return {boardArray};

})();

const game = (() =>{
    console.log("Game function is working");
    // const player1 = createPlayer("Player 1", "X");
    // const player2 = createPlayer("Player 2", "O");

})();
