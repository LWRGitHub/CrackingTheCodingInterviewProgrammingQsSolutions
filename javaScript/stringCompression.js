// String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).


// Gayel Laakmann McDowell(Feb 4, 2021) Cracking the Coding Interview; p. 91; 1.6 - String Compression



const strCompression = (str, count=1, ansArr=[]) =>{
    if(str.length === 0) return str;
    for(let i=1; i<=str.length; i++){
        if(str[i] === str[i-1]){
            count++;
        }else{
            ansArr.push(str[i-1], count);
            count = 1;
        }
    }
    return str.length < ansArr.length ? str : ansArr.join("")
}


console.log(strCompression("aabcccccaaa"));// a2b1c5a3
