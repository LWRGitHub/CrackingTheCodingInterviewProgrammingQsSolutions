/* 

Remove Dups: Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?



Gayel Laakmann McDowell(Feb 4, 2021) Cracking the Coding Interview; p. 94; 2.1 - Remove Dups

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



const removeDups = (val, previous=null, hash={}) => {
    while(val){
        if(hash[val.data]){  previous.next = val.next; }
        else{
            hash[val.data] = true;
            previous = val;
        }
        val = val.next;
    }
}


removeDups(ll.head);
ll.printListData();// 1,2,3,4,5

