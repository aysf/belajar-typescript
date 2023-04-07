function add(num1: number, num2: number): number {
    return num1 + num2;
}

// function printResult(num: number): void {
//     console.log('Result: ' +num);
// }


function printResult(num: number): undefined {
    console.log('Result: ' +num);
    return
}

console.log(add(2,3));

printResult(add(10,29));