function add(n1, n2, printErr, phrase) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error("ini rusak");
    }
    var res = n1 + n2;
    if (printErr) {
        console.log(phrase + res);
    }
    return res;
}
var num1 = 4;
var num2 = 9;
add(num1, num2, true, "the result is");
