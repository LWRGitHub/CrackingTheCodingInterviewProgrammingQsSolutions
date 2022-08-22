/*

    Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.



    Gayel Laakmann McDowell(Feb 4, 2021) Cracking the Coding Interview; p. 94; 2.2 - Return Kth to Last

*/



const lib = require('./LinkedList.js');
const ll = new lib.LinkedList();
ll.insertLast(1);
ll.insertLast(2);
ll.insertLast(2);
ll.insertLast(2);
ll.insertLast(3);
ll.insertLast(4);
ll.insertLast(4);
ll.insertLast(5);


const returnKthToLast = (val, k, ans=[]) => {

    while(val){
        if(val.data === k) {
            ans.push(val.data);
            val = val.next;
            while(val){
                ans.push(val.data);
                val = val.next;
            }
            break;
        }
        val = val.next;
    }
    return ans;
}

console.log(returnKthToLast(ll.head, 3));// [3,4,4,5]
