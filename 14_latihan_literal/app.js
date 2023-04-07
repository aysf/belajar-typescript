function combine(input1, input2, resultFormat) {
    var result;
    // if (typeof input1 === 'number' && typeof input2 === 'number') {
    //     result = input1 + input2;
    // } else {
    //     result = input1.toString() + input2.toString();
    //  }
    //  if (resultFormat === 'as-number') {
    //     return parseFloat(result);
    //     // return +result;
    //  } else {
    //     return result.toString();
    //  }
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultFormat === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
}
var combineNum = combine(4, 5, 'as-number');
console.log(combineNum);
var combineAgeNum = combine(32, 22, 'as-text');
console.log(combineAgeNum);
var combineStr = combine('max', 'weber', 'as-text');
console.log(combineStr);
