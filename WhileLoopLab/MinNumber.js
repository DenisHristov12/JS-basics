function min(input) {
    let n = input[0];
    let minNumber = Number.MAX_SAFE_INTEGER;
    let index = 1;

    while (n !== "Stop") {
        let currNum = Number(n);
        if(currNum < minNumber){
            minNumber = currNum;
        }
        n = input[index];
        index++;
    }

    console.log(minNumber);
}

min(["100",
"99",
"80",
"70",
"Stop"])
;