//  Implement a function named factorial that has one parameter: an integer n. It must return the value of n!
// Sample Input - 4
// Sample Output - 24

const factorial = n =>{
    let fact = 1;
    while(n >= 1){
        fact *= n;
        n--;
    }
    return fact;
}

console.log(factorial(4));