function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineNum = combine(2, 3);
console.log(combineNum);
var combineStr = combine("halo", "dunia");
console.log(combineStr);
