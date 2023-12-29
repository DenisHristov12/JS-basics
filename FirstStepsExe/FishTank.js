function calculate(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3])/100;

    let space = length * width * height;
    let spaceInLiters = space/1000;
    let litersOfWater = spaceInLiters * (1 - percent);

    console.log(litersOfWater);
}

calculate(["85", "75", "47","17"]);