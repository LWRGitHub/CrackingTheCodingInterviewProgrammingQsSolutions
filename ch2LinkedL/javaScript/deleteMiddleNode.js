/*

    Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but
    the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
    that node.
    
    EXAMPLE
        Input: the node c from the linked list a -> b -› c -> d -> e -> f
        Result: nothing is returned, but the new linked list looks like a -> b -> d -> e -> f
    

    Gayel Laakmann McDowell(Feb 4, 2021) Cracking the Coding Interview; p. 94; 2.3 - Delete Middle Node
*/


const lib = require('./LinkedList.js');
const ll = new lib.LinkedList();
ll.insertLast("a");
ll.insertLast("b");
ll.insertLast("c");
ll.insertLast("d");
ll.insertLast("e");
ll.insertLast("f");




const deleteMiddleNode = (ll, n) =>{
    if(n.next !== null){
        val = ll.head.next;
        pre = ll.head;
        while(val){
            if(val.data === n){
                pre.next = val.next;
                break;
            }
            pre = val;
            val = val.next;
        }
    }
}

console.log(`Before Delete "c": `);
ll.printListData();// a b c d e f
deleteMiddleNode(ll, "c");
console.log(`After Delete "c": `);
ll.printListData()// a b d e f
