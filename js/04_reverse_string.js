//write a javasript program to reverse a given string

// const reverseString=(str)=> {

//     // empty string
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString = newString+str[i];
//     }
//     return newString;
// }

// const string = prompt('Enter a string: ');
// const result = reverseString(string);
// console.log(result);

const reverse_str=(string)=>{
    const splitStr = string.split('')
    const reverStr = splitStr.reverse()
    const joinStr = reverStr.join('')
    return joinStr
}

const stringword = prompt("Enter the String: ")
console.log(reverse_str(stringword))