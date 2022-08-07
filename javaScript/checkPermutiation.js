// Check Permutation: Given two strings, write a method to decide if one is a permutation of the
// other.


// Gayel Laakmann McDowell(Feb 4, 2021) Cracking the Coding Interview; p. 90; 1.2 - Check Permutation




const checkPermutation = (s1, s2, s1CharCount={}, s2CharCount={}) =>{
    if(s1.length !== s2.length) return false;
    for(let i=0; i<s1.length; i++){
        s1[i] in s1CharCount ? s1CharCount[s1[i]] += 1 : s1CharCount[s1[i]] = 1
    }
    for(let i=0; i<s2.length; i++){
        s2[i] in s2CharCount ? s2CharCount[s2[i]] += 1 : s2CharCount[s2[i]] = 1
    }
    for(let key in s1CharCount){
        if(!(key in s2CharCount)) return false;
    }
    return true;
}

console.log(checkPermutation("qwertyuiop","poiuytrewq"))//true
console.log(checkPermutation("awesdrcftvgybuh","poiuyufuyukugftrewq"))//false
console.log(checkPermutation(";alkjfdsa","njikmetrj"))//false
