function add(n1: number, n2: number) {
    if (typeof n1 !== 'number') {
        throw new Error('Input Salah!')
    }
    return n1 + n2;
}

const num1 = '2';
const num2 = 9;

const result = add(num1, num2);
console.log(result)