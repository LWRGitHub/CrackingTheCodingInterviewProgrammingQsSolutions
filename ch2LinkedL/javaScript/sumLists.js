/*

    Sum Lists: You have two numbers represented by a linked list, where each node contains a single
    digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a
    function that adds the two numbers and returns the sum as a linked list. (You are not allowed to
    '"cheat" and just convert the linked list to an integer.)

    EXAMPLE
        Inout: (7-> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295
        Outnut: 2 -> 1 -› 9. That is. 912

    FOLLOW UP
        Suppose the digits are stored in forward order. Repeat the above problem.

        EXAMPLE
            Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295.
            Output: 9 -› 1 -› 2. That is, 912.


    Gayel Laakmann McDowell(Feb 4, 2021) Cracking the Coding Interview; p. 95; 2.5 - Sum Lists

*/



const lib = require('./LinkedList.js');
const ll1 = new lib.LinkedList();
ll1.insertLast(7);
ll1.insertLast(1);
ll1.insertLast(6);

const ll2 = new lib.LinkedList();
ll2.insertLast(5);
ll2.insertLast(9);
ll2.insertLast(2);

const ll3 = new lib.LinkedList();
ll3.insertLast(6);
ll3.insertLast(1);
ll3.insertLast(7);

const ll4 = new lib.LinkedList();
ll4.insertLast(2);
ll4.insertLast(9);
ll4.insertLast(5);



const sumLists = (n1, n2, cary=0, ans=new lib.LinkedList()) => {
    while(n1 || n2 || cary) { 
        const [n1Val, n2Val] = [n1?n1.data:0, n2?n2.data:0];
        const val =  n1Val + n2Val + cary;
        if (val > 9) {
            ans.insertLast(val % 10);
            cary = 1;
        }else{
            ans.insertLast(val);
            cary = 0;
        }
        n1 = n1?n1.next:0;
        n2 = n2?n2.next:0;
    }
    return ans;
}

const p1 = sumLists(ll1.head, ll2.head);
p1.printListData(); // 2 -> 1 -> 9

const sumListsForwardOrder = (n1, n2, ans=new lib.LinkedList()) => {
    let cary = 0;
    const toEnd = (n1, n2) => {
        if (n1.next) toEnd(n1.next, n2.next);
        const [n1Val, n2Val] = [n1?n1.data:0, n2?n2.data:0];
        const val =  n1Val + n2Val + cary;
        if (val > 9) {
            ans.insertFirst(val % 10);
            cary = 1;
        }else{
            ans.insertFirst(val);
            cary = 0;
        }
    }
    toEnd(n1, n2);
    return ans;
}

const p2 = sumListsForwardOrder(ll3.head, ll4.head);
p2.printListData(); // 9 -> 1 -> 2



