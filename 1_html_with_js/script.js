const btn = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

btn.addEventListener("click", function() {
    console.log(add(input1.value, input2.value));
});

function add(num1, num2) {
    return num1 + num2;
}