const createPlayer = (name, marker) => {
    return {name, marker};
}


const gameBoard = (() => {
    // query selecting all elements that have a box class
    let squares = document.querySelectorAll(".box");
    // console.log(squares);

    //convert squares to an Array
    const boardArray = Array.from(squares);
    // console.log(boardArray);

    return {boardArray};
})();

