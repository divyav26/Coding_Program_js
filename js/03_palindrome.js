// //write a javascript function to check if a given string is a palindrome or not

// function checkPalindrome(string) {
//      //length
//     const len = string.length;
// 
//     for (let i = 0; i < len / 2; i++) {
//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// const string = prompt('Enter a string: ');
// const value = checkPalindrome(string);
// console.log(value);


const check_palindrom =(str)=>{
    const strSplit = str.split('')
    const strRevers = strSplit.reverse()
    const strjoin = strRevers.join('')
    if(str === strjoin){
        console.log("Its is a Palindrome")
    }
    else{
        console.log(" Its is a not Palindrome")
    }
}
let string = prompt("Enter String :")
check_palindrom(string)
