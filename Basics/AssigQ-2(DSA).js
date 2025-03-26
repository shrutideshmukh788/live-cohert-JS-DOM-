// let i = 11;
// i = i++ + ++i;
// console.log(i);

let a = 11, b = 22, c;
c = a + b + a++ + b++ + ++a + ++b;
console.log("a=" + a);
console.log("b=" + b);
console.log("c=" + c);

let i = 0;
i = i++ - --i + ++i - i--;
console.log(i);

let d = true;
d++;
console.log(d);

// let i = 1, j = 2, k = 3;
// let m = i-- - j-- - k--;
// console.log("i=" + i);
// console.log("j=" + j);
// console.log("k=" + k);
// console.log("m=" + m);

// let a = 1, b = 2;
// console.log(--b - ++a + ++b - --a);

// let i = 19, j = 29, k;
// k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++;
// console.log("i=" + i);
// console.log("j=" + j);
// console.log("k=" + k);

// let i = 11;
// let j = --(i++);

// Q9:
// let m = 0, n = 0;
// let p = --m * --n * n-- * m--;
// console.log(p);

// let a = 11++;
// console.log(a);

// Q12:
// let i = 0, j = 0;
// console.log(--i * i++ * ++j * j++);