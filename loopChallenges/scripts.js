// Print odds 1-20
for(i=1; i<21; i=i+2){
    console.log(i);
}

// Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.
for(i=100; i>0; i=i-3){
    console.log(i)
}

// Print the sequence
crazy = [4,2.5,1,-5,-2,-35];
for(let i = 0; i < crazy.length; i++) {
    console.log(crazy[i])
}

// Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
var total = 1;
for (let i = 1; i < 101; i++) {
    total = total + i;
console.log(total)
}

// Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.
var newTotal = 1;
for (let i = 1; i < 13; i++) {
    newTotal = newTotal * i;
console.log(newTotal)
}