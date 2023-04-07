function combine(input1, input2, OutputFormat) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || OutputFormat === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineNum = combine(4, 5, 'as-number');
console.log(combineNum);
