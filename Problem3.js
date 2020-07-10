// Complete the function in the editor below by returning a RegExp object, that matches any string  that begins and ends with the same vowel.
// The function must return a RegExp object that matches any string  beginning with and ending in the same vowel.
// The length of string  is >=3.
// String  consists of lowercase letters only (i.e., [a-z]).

// Sample Input1 -   bcd               Sample Output1 - false
// Sample Input2 -   abcd              Sample Output2 - false
// Sample Input3 -   abcda             Sample Output3 - true
// Sample Input2 -   abcdo             Sample Output4 - false

const regexVar = (s) =>{
    if(s.length >= 3){
        const reg = /^([aeiou]).+([aeiou])$/
        let re = reg.test(s); 
        if(!(s[0] === s[s.length - 1])){
            re = false;
        }
        return re;
    }
}

console.log(regexVar('abcda'));


//   const re = /^([aeiou]).+(\1)$/               Instead of writing so much of code
//   \1 matches to previously stored match. 
//   \2 looks for matched item stored 2 instances ago 
//   \3 looks for matched item stored 3 ago, etc