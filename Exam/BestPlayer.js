function bestPlayer(input) {
    let index = 0;
    let playerName = input[index];
    index++;
    let goalsScored = Number(input[index]);
    index++;

    let best = '';
    let goals = 0;
    let hattrick = false;

    while(playerName !== "END"){

        if(goalsScored > goals){
            best = playerName;
            goals = goalsScored;
            if(goals >= 3){
                hattrick = true;
            }
        }

        if(goals >= 10){
            console.log(`${best} is the best player!`);
            console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
            return;
        }
        
        playerName = input[index];
        index++;
        goalsScored = Number(input[index]);
        index++;

    }

    if(hattrick == false){
        console.log(`${best} is the best player!`);
        console.log(`He has scored ${goals} goals.`);
    }else{
        console.log(`${best} is the best player!`);
        console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
    }

}

bestPlayer(["Neymar",
"2",
"Ronaldo",
"1",
"Messi",
"3",
"END"])

;