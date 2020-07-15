// Complete the getLetter(s) function. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z).
// It must return A, B, C, or D depending on the following criteria:

// If the first character in string, is in the set {a,e,i,o,u}, then return A.
// If the first character in string, is in the set {b,c,d,f,g}, then return B.
// If the first character in string, is in the set {h,j,k,l,m}, then return C.
// If the first character in string, is in the set ,{n,p,q,r.s,t,v,w,x,y,z} then return D.

// SampleInput0 - adfgt         SampleOutput0 - A

function getLetter(s) {
    let letter = s.charAt(0);
    switch(letter){
        case 'a':
        case 'e': 
        case 'i':
        case 'o':
        case 'u':
            return "A";
            break;
        case 'b':
        case 'c': 
        case 'd':
        case 'f':
        case 'g':
            return "B";
            break;
        case 'h':
        case 'j': 
        case 'k':
        case 'l':
        case 'm':
            return "C";
            break;
        case 'n':
        case 'p': 
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v': 
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            return "D";
            break;
        default:
            return "Wrong Input";
            break;
    }
    return letter;
}
console.log(getLetter('adfgt'))