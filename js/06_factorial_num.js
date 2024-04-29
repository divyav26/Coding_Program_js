//write a js program to calculate the factorial of a givrn numbers

// const fact_num = (number)=>{
//     if (number < 0) {
//         return "Factorial is not defined for negative numbers.";
//     } else if (number === 0 || number === 1) {
//         return 1;
//     } else {
//         let fact = 1;
//             for (i = 1; i <= number; i++) {
//             fact =fact * i;
//         }
//         return (`The factorial of ${number} is ${fact}.`);
//     }
   
// }
// const Factotail_num = parseInt(prompt("Enter the number: "))
// console.log(fact_num(Factotail_num))


// using  recursion 
function calculateFact(number) {
    if (number < 0) {
        return "Factorial is not defined for negative numbers.";
    } else if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * calculateFact(number - 1);
    }
}

// Example usage:
const num = 5;
console.log("The factorial of", num, "is", calculateFact(num));