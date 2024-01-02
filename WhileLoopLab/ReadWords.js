function reading(input) {
    let index = 0;
    let text = input[index];

    while (text !== "Stop") {
        index++;
        console.log(text);
        text = input[index];
    }
}

reading(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
;