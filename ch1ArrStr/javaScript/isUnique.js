// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures?


// Gayel Laakmann McDowell(Feb 4, 2021) Cracking the Coding Interview; p. 90; 1.1 - Is Unique




// NOTE: Question says "What if you cannot use additional data structures"
    // - With this in mind I can't do the below Problem because it uses a set, although thats my if I could.


// const isUnique = (s,memo=new Set()) => {
//     for(let i=0; i<s.length; i++){
//         if(memo.has(s[i])) return false;
//         memo.add(s[i])
//     }
//     return true;
// }


// Honestly this is a better algorithm than the one with Set, this is what I would use in the end

const isUnique = s => {
    for(let i=0; i<s.length; i++){
        if(s.substring(i+1, s.length).indexOf(s[i]) > -1) return false;
    }
    return true;
}

console.log(isUnique("qwertyuiop"))//true
console.log(isUnique("qqjjhhff"))//false

console.log(isUnique("zcrybutuvytrw3wtitvewrewetrriuy"))//false
console.log(isUnique("/.,mnbvcxz';lkjhgfdsa[poiuytrewq"))//true