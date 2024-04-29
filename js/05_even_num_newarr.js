//write a js function that takes an array of number and return a new array with only the even number


const even_num =(arr)=>{
    return arr.filter(num =>num%2===0);
}
const num=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const res = even_num(num)
console.log(res)



// second way 
const even_arr=(arr)=>{
    let evennum = []
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]%2===0){
            evennum.push(arr[i])
        }
    }
    return evennum;
}

const numEven =[10,24,11,9,5,20]
console.log(even_arr(numEven))

