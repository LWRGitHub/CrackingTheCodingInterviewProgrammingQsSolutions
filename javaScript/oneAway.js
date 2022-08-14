// One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.


// EXAMPLE

    // pale, ple -> true
    // pales, pale -› true
    // pale, bale -> true
    // pale, bake -> false



const addOrDel1 = (lgStr, smStr, [smIdx,lgIdx]=[0,0]) =>{
    while(lgIdx < lgStr.length){
        if(lgStr[lgIdx] !== smStr[smIdx]){
            lgIdx++;
            if(lgIdx-smIdx > 1) return false;
        }else{
            smIdx++;
            lgIdx++;
        }
    }
    return true;
}

const swap1 = (s1, s2, [idx,swapC]=[0,0]) =>{
    while(idx < s1.length){
        if(s1[idx] !== s2[idx]){
            swapC++;
            if(swapC > 1) return false;
        }
        idx++;
    }
    return true;
}

const oneAway = (s1, s2) =>{
    if(s1 === s2) return true;
    if(s1.length - s2.length === 1){
        return addOrDel1(s1, s2);
    }else if(s2.length-s1.length === 1 ){
        return addOrDel1(s2, s1);
    }else if(s2.length === s1.length){
        return swap1(s1, s2);
    }
    return false;
}

console.log(oneAway("pale", "ple"));// true
console.log(oneAway("pales", "pale"));// true
console.log(oneAway("pale", "bale"));// true 
console.log(oneAway("pale", "bake"));// false
