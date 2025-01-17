function nthFibo(n) {
    if (n <= 0) {
        throw new Error("n должно быть больше или равно 1");
    }
    if (n === 1) return 0;
    if (n === 2) return 1;

    let a = 0, b = 1;
    for (let i = 3; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }
    return b;
}

console.log(nthFibo(4)); 

//второй вариант через рекурсию

function nthFibo(n) {
    if (n <= 0) {
        throw new Error("n должно быть больше или равно 1");
    }
    if (n === 1) return 0;
    if (n === 2) return 1;
    return nthFibo(n - 1) + nthFibo(n - 2);
}

console.log(nthFibo(4));