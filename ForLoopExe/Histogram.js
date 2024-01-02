function printHistogram(input) {
    let n = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    let p1percent = 0;
    let p2percent = 0;
    let p3percent = 0;
    let p4percent = 0;
    let p5percent = 0;
    

    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);

        if(num < 200){
            p1++;
        }else if(num >= 200 && num < 400){
            p2++;
        }else if(num >= 400 && num < 600){
            p3++;
        }else if(num >= 600 && num < 800){
            p4++;
        }else if(num >= 800){
            p5++;
        }
    }

    p1percent = p1 / n * 100;
    p2percent = p2 / n * 100;
    p3percent = p3 / n * 100;
    p4percent = p4 / n * 100;
    p5percent = p5 / n * 100;

    console.log(`${p1percent.toFixed(2)}%`);
    console.log(`${p2percent.toFixed(2)}%`);
    console.log(`${p3percent.toFixed(2)}%`);
    console.log(`${p4percent.toFixed(2)}%`);
    console.log(`${p5percent.toFixed(2)}%`);
}

printHistogram(["3","1","2","999"]);