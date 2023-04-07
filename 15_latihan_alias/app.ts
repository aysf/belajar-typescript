type strOrNum = string | number;
type outputFormat = 'as-number' | 'as-text';

function combine(input1: strOrNum, input2: strOrNum, OutputFormat: outputFormat) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || OutputFormat === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}

const combineNum = combine(4, 5, 'as-number');
console.log(combineNum);