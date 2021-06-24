// function alwaysHungry(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == "food") {
//             console.log("yummy")
//         }
//     }
//     const checker = arr
//     const result = arr.includes("food")
//     if (result == false){
//         console.log("I'm Hungry")
//     }      
// }
   
// alwaysHungry([3.14, "food", "pie", true, "food"]);
// // this should console log "yummy", "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > cutoff) {
//            filteredArr.push(arr[i]) 
//         }    
//     }
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]


// function betterThanAverage(arr) {
//     var sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]    
//     }
//     average = sum / arr.length
//     // calculate the average
//     var count = 0
//     for (let u = 0; u < arr.length; u++) {
//         if (arr[u] > average) {
//             count = count+1
//         }        
//     }
//     // count how many values are greated than the average
//     return count;
// }
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4


// function reverse(arr) {
//     for (let r = 0; r < arr.length; r++) {
//        const result = arr.reverse()      
//     }
//     return arr;
// }
   
// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// function fibonacciArray(n) {
//     // the [0, 1] are the starting values of the array to calculate the rest from
//     var fib = []
//     fib[0] = 0
//     fib[1] = 1
//     for (i = 2; i < n; i++) {
//        fib[i] = fib[i - 2] + fib[i-1];        
//     }
//     return fib;
// }
   
// var result = fibonacciArray(10);
// console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


