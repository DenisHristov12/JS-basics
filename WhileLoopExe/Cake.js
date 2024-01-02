function calculate(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);

    let piecesNum = width * length;
    let piecesLeft = 0;
    let sum = 0;

    let index = 2;
    let piecesTaken = input[index];
    index++;

    while(piecesTaken !== "STOP"){
        piecesTaken = Number(piecesTaken);
        sum += piecesTaken;

        piecesLeft = piecesNum - sum;

        if(piecesLeft <= 0){
            console.log(`No more cake left! You need ${sum - piecesNum} pieces more.`);
            return;
        }

        piecesTaken = input[index];
        index++;
    }

    console.log(`${piecesLeft} pieces are left.`);
}

calculate(["10",
"2",
"2",
"4",
"6",
"STOP"])

;