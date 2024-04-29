//8. Write a JavaScript program to find the largest element in a nested array. 


function findLargest(arr) {
    let largest = arr[0]; 
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let nestedMax = findLargest(arr[i]);
            largest = Math.max(largest, nestedMax);
        } else {
            largest = Math.max(largest, arr[i]);
        }
    }
     return largest;
}

const nestedArray = [11, [2, 3, [4, 5], 6], 7, [8, 9, 10]];
const largestElement = findLargest(nestedArray);
console.log("The largest element in the nested array is:", largestElement);
