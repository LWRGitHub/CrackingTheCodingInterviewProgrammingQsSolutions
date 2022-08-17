// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. You can ignore casing and non-letter characters.


// EXAMPLE
    // Input: Tact Coa
    // Output: True (permutations: "taco cat", "fatco cta" etc.)


// Gayel Laakmann McDowell(Feb 4, 2021) Cracking the Coding Interview; p. 91; 1.4 - Palindrome Permutation



const palindromePermutation = (s, lCount={}, sLA=true) =>{
    s = s.replace(/[\W_]+/g, '').toLowerCase();
    for(let i=0; i<s.length; i++){
        s[i] in lCount ? lCount[s[i]] += 1 : lCount[s[i]] = 1
    }
    for(let k in lCount){
        if( lCount[k]!==2&&!sLA || lCount>2 ) return false;
        if( lCount[k] === 1 ) sLA = false;
    }
    return true;
}


console.log(palindromePermutation("Tact Coa"));//true
console.log(palindromePermutation('Hello world!'));//false
