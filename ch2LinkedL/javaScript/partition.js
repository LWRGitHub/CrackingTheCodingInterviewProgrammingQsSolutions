/*

    Partition: Write code to partition a linked list around a value x, such that all nodes less than x
    come before all nodes greater than or equal to x. (IMPORTANT: The partition element × can appear
    anywhere in the "right partition", it does not need to appear between the left and right partitions.
    The additional spacing in the example below indicates the partition. Yes, the output below is one
    of many valid outputs!)
    
    EXAMPLE
        Input:        3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
        
        Output:       3 -> 1 -> 2          ->          10 -> 5 -> 5 -> 8

        
    Gayel Laakmann McDowell(Feb 4, 2021) Cracking the Coding Interview; p. 94; 2.4 - Partition

*/



const lib = require('./LinkedList.js');
const ll = new lib.LinkedList();
ll.insertLast(3);
ll.insertLast(5);
ll.insertLast(8);
ll.insertLast(5);
ll.insertLast(10);
ll.insertLast(2);
ll.insertLast(1);


const partition = (val, pNum, ll1=new lib.LinkedList(), ll2=new lib.LinkedList()) =>{
    while(val){
        val.data < pNum ? ll1.insertLast(val.data) : ll2.insertLast(val.data);
        val = val.next;
    }
    return [ll1, ll2];
}

console.log(partition(ll.head, 5));
/* 
    [
        LinkedList { head: Node { data: 3, next: [Node] }, size: 3 },
        LinkedList { head: Node { data: 5, next: [Node] }, size: 4 }
    ]   
*/
