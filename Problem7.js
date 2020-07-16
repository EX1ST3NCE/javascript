// Complete the getSecondLargest function. 
// It has one parameter: an array of numbers. The function must find and return the second largest number in the array.

// SampleInput1 - 2, 3 , 5, 6, 6            SampleOutput1 - 5

function getSecondLargest(nums){
    nums.sort();                                        // Sorting the array in ascending order
    const lastElement = nums[nums.length - 1];          // Storing the value of last element of array
    
    for(let i = nums.length - 2; i >= 0; i--){          
        if(nums[i] !== lastElement){                    // Checking the second last element with the last element
            console.log(`The second largest number is ${nums[i]}`);
            break;
        }
    }
}

getSecondLargest([4,5,3,6,6]);