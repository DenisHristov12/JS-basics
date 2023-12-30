function Area(input) {
    let type = input[0];

    if(type === "square"){
        let a = Number(input[1]);
        let squareArea = a*a;
        console.log(squareArea.toFixed(3));
    }else if(type === "rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let squareArea = a*b;
        console.log(squareArea.toFixed(3));
    }else if(type === "circle"){
        let r = Number(input[1]);
        let squareArea = Math.PI * r * r;
        console.log(squareArea.toFixed(3));
    }else if(type === "triangle"){
        let a = Number(input[1]);
        let h = Number(input[2]);
        let squareArea = (a * h)/2;
        console.log(squareArea.toFixed(3));
    }
}

Area(["circle", "6", "4"]);