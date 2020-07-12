// Try to reverse string using the split, reverse, and join methods.
// If an exception is thrown, catch it and print the contents of the exception's on a new line.
// If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

// Sample Input0 - "1234"               SampleOutput0 - 4321
// Sample Input1 - Number(1234)         SampleOutput1 - s.split is not a function
//                                                      1234

function reverseString(s) {

    try{
        const arr = s.split('');
        arr.reverse();
        const str = arr.join('');
        console.log(str);
    }
    catch(e){
        console.log(e.message);
        console.log(s);
    }
}
reverseString(Number(2122));