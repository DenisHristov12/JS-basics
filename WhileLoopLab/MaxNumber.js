function max(input) {
    let n = input[0];
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let index = 1;

    while (n !== "Stop") {
        let currNum = Number(n);
        if(currNum > maxNumber){
            maxNumber = currNum;
        }
        n = input[index];
        index++;
    }

    console.log(maxNumber);
}

max(["-1",
"-2",
"Stop"])
;