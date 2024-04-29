//10. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).

const string_convert=(str)=>{
    str = str.toLowerCase().split(' ');
    for(let i=0; i<str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ')
}

console.log(string_convert("thank for coming.."))