function arrayPlayground(array) {
    let firstLetter = array[0];
    console.log(array[1]);
    console.log(firstLetter);

    console.log(array);
    console.table(array);
}

arrayPlayground(["a is first letter", "b", "c", "d"]);