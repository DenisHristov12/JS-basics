function Calculate(input) {
    let score = Number(input[0]);
    let bonusScore = 0;

    if(score <= 100){
        bonusScore += 5;
    }else if(score > 100 && score <= 1000){
        bonusScore += score * (20/100);
    }else if(score > 1000){
        bonusScore += score * (10/100);
    }

    if(score % 2 == 0){
        bonusScore += 1;
    }else if(score % 10 == 5){
        bonusScore += 2;
    }

    console.log(bonusScore);
    console.log(score + bonusScore);
}

Calculate(["175"]);