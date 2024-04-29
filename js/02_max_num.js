
//write a js program to find the maximum num in an array



// using Math method 

// const max_math=() =>{
//     let arr =[1,2,3,4,10]
//     res = Math.max(...arr)
//     console.log(res)
// }
// max_math()


// using reduce Method 
const max_reduce = ()=>{
    let arr = [1,2,3,4,10]
    let max_num = arr.reduce((acc,current)=>Math.max(acc,current))
    console.log("The max num is: ",max_num)
}
max_reduce()


//iterating through  the array
// const max_num=()=>{
//     let arr =[1,2,3,4,10]
//     let max=arr[0]
//     for(let item of arr){
//         if(item >max){
//             max = item
//         }
//     }
//     console.log("Maximun number from array is : ",max)
    
// }
// max_num()



