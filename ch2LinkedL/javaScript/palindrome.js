/*

    Palindrome: Implement a function to check if a linked list is a palindrome.


    Gayel Laakmann McDowell(Feb 4, 2021) Cracking the Coding Interview; p. 95; 2.6 - Palindrome


    Example:

        Input: 1 -> 2 -> 3 -> 2 -> 1 -> null
        Output: true

        Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
        Output: false

        Input: t -> i -> m -> e -> null
        Output: false

        Input: A -> m -> a- > n -> , -> a -> p -> l -> a -> n -> , -> a -> c -> a -> n -> a -> l -> , -> P -> a -> n -> a ->m -> a -> ! -> null
        Output: true


*/



const lib = require('./LinkedList.js');
const ll1 = new lib.LinkedList();
ll1.insertLast(1);
ll1.insertLast(2);
ll1.insertLast(3);
ll1.insertLast(2);
ll1.insertLast(1);

const ll2 = new lib.LinkedList();
ll2.insertLast(1);
ll2.insertLast(2);
ll2.insertLast(3);
ll2.insertLast(4);
ll2.insertLast(5);

const ll3 = new lib.LinkedList();
ll3.insertLast('t');
ll3.insertLast('i');
ll3.insertLast('m');
ll3.insertLast('e');

const ll4 = new lib.LinkedList();
ll4.insertLast('A');
ll4.insertLast('m');
ll4.insertLast('a');
ll4.insertLast('n');
ll4.insertLast(',');
ll4.insertLast('a');
ll4.insertLast('p');
ll4.insertLast('l');
ll4.insertLast('a');
ll4.insertLast('n');
ll4.insertLast(',');
ll4.insertLast('a');
ll4.insertLast('c');
ll4.insertLast('a');
ll4.insertLast('n');
ll4.insertLast('a');
ll4.insertLast('l');
ll4.insertLast(',');
ll4.insertLast('P');
ll4.insertLast('a');
ll4.insertLast('n');
ll4.insertLast('a');
ll4.insertLast('m');
ll4.insertLast('a');
ll4.insertLast('!');



const palindrome = (val, llLen=0, str='') => {
    while(val) {
        llLen++;
        if (val && val.data.toString().match(/^[a-zA-Z]+$/)){
             str += val.data.toLowerCase();
        }else if(val && val.data.toString().match(/^[0-9]+$/)){
            str += val.data
        }
        val = val.next;
    }
    for (let i=0; i<Math.floor(llLen/2); i++) {
        if (str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
}

console.log(palindrome(ll1.head)); // true
console.log(palindrome(ll2.head)); // false
console.log(palindrome(ll3.head)); // false
console.log(palindrome(ll4.head)); // true

