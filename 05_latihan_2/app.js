function add(n1, n2) {
    if (typeof n1 !== 'number') {
        throw new Error('Input Salah!');
    }
    return n1 + n2;
}
var num1 = '2';
var num2 = 9;
var result = add(num1, num2);
console.log(result);
