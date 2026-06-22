let n1 = 10;
let sum = 0;

for(let i = 1; i <= n1; i++) {
    if(i % 2 === 0) {
        sum += i;
    }
}

console.log("Sum of even numbers from 1 to " + n1 + " = " + sum);

let n2 = 7;
let isPrime = true;

if(n2 <= 1) {
    isPrime = false;
} else {
    for(let i = 2; i < n2; i++) {
        if(n2 % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if(isPrime) {
    console.log(n2 + " is prime.");
} else {
    console.log(n2 + " is not prime.");
}
