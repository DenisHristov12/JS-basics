function sum(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let n3 = Number(input[2]);

    let combinations = 0;

    for (let i = n1; i <= n2; i++) {
        for (let j = n1; j <= n2; j++) {
            combinations++;
            if(i + j === n3){
                console.log(`Combination N:${combinations} (${i} + ${j} = ${n3})`);
                return;
            }
        }
    }

    console.log(`${combinations} combinations - neither equals ${n3}`);
}

sum(["1",
"10",
"5"])

;