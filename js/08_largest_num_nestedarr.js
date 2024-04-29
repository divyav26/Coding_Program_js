//8. Write a JavaScript program to find the largest element in a nested array. 


function findLargestInNestedArray(arr) {
    let largest = arr[0]; // Initialize with smallest possible value
    
    // Iterate through the nested array
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // If element is an array, recursively call the function
            let nestedMax = findLargestInNestedArray(arr[i]);
            largest = Math.max(largest, nestedMax);
        } else {
            // If element is not an array, compare with current largest
            largest = Math.max(largest, arr[i]);
        }
    }
    
    return largest;
}

// Example usage:
const nestedArray = [11, [2, 3, [4, 5], 6], 7, [8, 9, 10]];
const largestElement = findLargestInNestedArray(nestedArray);
console.log("The largest element in the nested array is:", largestElement);
