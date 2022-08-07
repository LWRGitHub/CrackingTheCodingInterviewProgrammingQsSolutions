// URLify: Write a method to replace all spaces in a string with '%20! You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true' length of the string. (Note: If implementing in Java, please use a character array so that you can perform this operation in place.)


// EXAMPLE
    // Input: "Mr John Smith    ",  13
    // Output: "Mr%2@John%20Smith"


// Gayel Laakmann McDowell(Feb 4, 2021) Cracking the Coding Interview; p. 90; 1.3 - URLify



// NOTE: Although this solution does not use the given variable sLen, It is preferred when you had a massive code file with thousands of lines because it is a one liner.


const uRLify = (s, sLen) => {
    return s.split(" ").filter(arrS => arrS.toLowerCase() !== "").join("%20");
}

console.log(uRLify("Mr John Smith    ",  13))


