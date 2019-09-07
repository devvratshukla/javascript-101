function sum() {
    let total = 0;

    function f(y) {
        total += y;
        return f;
    }

    f.valueOf = function() {
        return total;
    };

    return f;
}

const sumIt = sum();

console.log(+sumIt(1)); // 1
console.log(+sumIt(1)(2)); // 4
console.log(+sumIt(1)(2)(3)); // 10
