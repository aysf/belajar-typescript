const btn = document.querySelector("button")! as HTMLElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

btn.addEventListener("click", function() {
    console.log(sum(+input1.value, +input2.value));
});

function sum(num1: number, num2: number) {
    return num1 + num2;
}