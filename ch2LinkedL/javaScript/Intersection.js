/*

    Intersection: 
    Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting 
    node. Note that the intersection is defined based on reference, not value. That is, if the kth
    node of the first linked list is the exact same node (by reference) as the jth node of the second
    linked list, then they are intersecting.


    Gayel Laakmann McDowell(Feb 4, 2021) Cracking the Coding Interview; p. 95; 2.7 - Intersection


    Examples:
        Input:
            a \ 
                b -> c -> d -> null
            e /
        Output: b
        Explanation: 
            Example 1; linked list 1 is:    a -> b -> c -> d -> null
            & linked list 2 is:             e -> b -> c -> d -> null. 
            b is the intersecting node becasue that node is created once and referenced by both linked lists.

        Input:
            3 -> 2 -> 6 \
                        7 -> 9 -> 12 -> 15 -> null
            1 -> 4 -> 5 /
        Output: 7

        Input:
            f -> g -> h -> i -> j -> null
            k -> l -> m -> i -> o -> p -> null
        Output: null
        Explanation:
            There is no intersecting node becasue the linked lists do not share the same reference. Even though the value 'i' is in both linked lists, the nodes are not the same node.

*/



const lib = require('./LinkedList.js');

// example 1
// ll1
const a = new lib.Node('a');

// ll2
const e = new lib.Node('e');

// intersection
const b = new lib.Node('b');
const c = new lib.Node('c');
const d = new lib.Node('d');

// ll1
a.next = b;
a.next.next = c;
a.next.next.next = d;

// ll2
e.next = b;
e.next.next = c;
e.next.next.next = d;

// example 2
// ll1
const three = new lib.Node(3);
const two = new lib.Node(2);
const six = new lib.Node(6);

// ll2
const one = new lib.Node(1);
const four = new lib.Node(4);
const five = new lib.Node(5);

// intersection
const seven = new lib.Node(7);
const nine = new lib.Node(9);
const twelve = new lib.Node(12);
const fifteen = new lib.Node(15);

// ll1
three.next = two;
three.next.next = six;
three.next.next.next = seven;
three.next.next.next.next = nine;
three.next.next.next.next.next = twelve;
three.next.next.next.next.next.next = fifteen;

// ll2
one.next = four;
one.next.next = five;
one.next.next.next = seven;
one.next.next.next.next = nine;
one.next.next.next.next.next = twelve;
one.next.next.next.next.next.next = fifteen;

// example 3, no intersection
// ll1
const ex3ll1 = new lib.LinkedList();
ex3ll1.insertLast('f');
ex3ll1.insertLast('g');
ex3ll1.insertLast('h');
ex3ll1.insertLast('i');

// ll2
const ex3ll2 = new lib.LinkedList();
ex3ll2.insertLast('k');
ex3ll2.insertLast('l');
ex3ll2.insertLast('m');
ex3ll2.insertLast('i');
ex3ll2.insertLast('o');
ex3ll2.insertLast('p');



const intersection = (ll1, ll2, memo={}) => {
    while(ll1) {
        memo[ll1.data] = ll1;
        ll1 = ll1.next;
    }
    while(ll2) {
        if(memo[ll2.data] && memo[ll2.data] === ll2) return ll2;
        ll2 = ll2.next;
    }
    return null;
};


// example 1
console.log(intersection(a, e)); 
/*
    Node {
        data: 'b',
        next: Node { data: 'c', next: Node { data: 'd', next: null } }
    }
*/

// example 2
console.log(intersection(three, one)); 
/*
    Node {
        data: 7,
        next: Node { data: 9, next: Node { data: 12, next: [Node] } }
    }
*/

// example 3
console.log(intersection(ex3ll1.head, ex3ll2.head)); // null

