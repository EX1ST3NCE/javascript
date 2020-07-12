// Complete the isPositive function. It has one integer parameter, . If the value of  is positive, it must return the string YES.
// If  is 0, throw an Error with  Zero Error.
// If  is negative, throw an Error with  Negative Error.

// SampleInput0 - 3                 SampleOutput0 - YES
//                1                                 YES
//                2                                 YES

// SampleInput1 - 2                 SampleOutput1 - Yes
//                0                                 Zero Error
//                6                                 YES

function isPositive(a) {
    try{
        if(a>0){
            return 'YES';
        }
        else if(a===0) throw 'Zero Error';
        else if(a<0) throw 'Negative Error'; 
    }
    catch(err){
        return err;
    }
}

console.log(isPositive(0));