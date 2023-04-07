function add(n1: number, n2: number, printErr: boolean, phrase: string) {

    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error("ini rusak");
    }

    const res = n1+n2;
    if (printErr) {
        console.log(phrase + res);
    }

    return res;
}

const num1 = 4;
const num2 = 9;


add(num1, num2, true, "the result is")

