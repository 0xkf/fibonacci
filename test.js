// function fib(n) {
//     if (n < 3) return 1;
//     return fib(n - 1) + fib(n - 2);
// }

// fib(1);
// console.log()
function fib(n) {
    const result = [0, 1]; //初期状態

    for (i = 2; i <= n; i++) {
        const a = result[i - 1];
        const b = result[i - 2];

        result.push(a + b);
    }
    return result[n];
}



// function print(m){
//     for (i = 1; i <= m; i++) {
//         console.log(fib(i));
//     }

// }


console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(10));
console.log(fib(15));
console.log(fib(100));
// print(10);







