function combine(input1: number | string, input2: number | string, resultFormat: 'as-number' | 'as-text') {
    let result;


    // cara 1

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


    // cara 2

    if (typeof input1 === 'number' && typeof input2 === 'number' || resultFormat === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
     }

 
}

const combineNum = combine(4,5, 'as-number');
console.log(combineNum);

const combineAgeNum = combine(32,22, 'as-text');
console.log(combineAgeNum);

const combineStr = combine('max', 'weber', 'as-text');
console.log(combineStr);