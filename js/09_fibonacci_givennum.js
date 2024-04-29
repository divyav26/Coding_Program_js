//Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

const num = parseInt(prompt("Enter the number: "))

let x=0
let y=1
let fn = x+y
console.log(x)
while(fn<num){
    console.log(fn)
    fn = x+y
    x=y
    y=fn
}