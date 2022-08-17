//  String Rotation: Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g., "waterbottle" is a rotation of "erbottlewat").


// Gayel Laakmann McDowell(Feb 4, 2021) Cracking the Coding Interview; p. 91; 1.9 - String Rotation



const isSubstring = (s1, s2, s1H={}, s2H={})=>{
    if(s1.length !== s2.length) return false;
    for(let i=0; i<s1.length; i++){
        s1[i] in s1H ? s1H[s1[i]]++ : s1H[s1[i]] = 1;
    }
    for(let i=0; i<s2.length; i++){
        s2[i] in s2H ? s2H[s2[i]]++ : s2H[s2[i]] = 1;
    }
    for(let key in s1H){
        if(!(key in s2H) || s2H[key] !== s1H[key]) return false;
    }
    return true;
}


console.log(isSubstring("waterbottle", "erbottlewat"))// true
console.log(isSubstring("waterbottle", "erbottlewatt"))// false
