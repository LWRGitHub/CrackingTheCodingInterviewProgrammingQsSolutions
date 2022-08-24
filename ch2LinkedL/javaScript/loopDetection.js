/*

    Loop Detection: Given a linked list which might contain a loop, implement an algorithm that returns the node at the beginning of the loop (if one exists).

    EXAMPLE
        Input:
            A -> B -> C -> D        
                      ˄    |
                        \  ⌄
                           E
        Output:
            C

        Input:
            4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 77
                                     ˄                 |
                                       \               ⌄
                                          98 <- 94 <- 88 
        Output:   
            9  
            
        Input:
            1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10
        Output:
            null


    Gayel Laakmann McDowell(Feb 4, 2021) Cracking the Coding Interview; p. 95; 2.8 - Loop Detection

*/

// ---- List setup ----
const lib = require('./LinkedList.js');
const A = new lib.Node('A');
const B = new lib.Node('B');
const C = new lib.Node('C');
const D = new lib.Node('D');
const E = new lib.Node('E');

A.next = B;
B.next = C;
C.next = D;
D.next = E;
E.next = C;


const four = new lib.Node(4);
const five = new lib.Node(5);
const six = new lib.Node(6);
const seven = new lib.Node(7);
const eight = new lib.Node(8);
const nine = new lib.Node(9);
const ten = new lib.Node(10);
const twelve = new lib.Node(12);
const seventySeven = new lib.Node(77);
const eightEight = new lib.Node(88);
const ninetyFour = new lib.Node(94);
const ninetyEight = new lib.Node(98);

four.next = five;
five.next = six;
six.next = seven;
seven.next = eight;
eight.next = nine;
nine.next = ten;
ten.next = twelve;
twelve.next = seventySeven;
seventySeven.next = eightEight;
eightEight.next = ninetyFour;
ninetyFour.next = ninetyEight;
ninetyEight.next = nine;


const ll3 = new lib.LinkedList();
ll3.insertLast(1);
ll3.insertLast(2);
ll3.insertLast(3);
ll3.insertLast(4);
ll3.insertLast(5);
ll3.insertLast(6);
ll3.insertLast(7);
ll3.insertLast(8);
ll3.insertLast(9);
ll3.insertLast(10);

// ---- /List setup ----



const loopDetection = (head, turtle=head, rabbit=head) =>{
    while (rabbit && rabbit.next) {
        turtle = turtle.next;
        rabbit = rabbit.next.next;
        if (turtle === rabbit) break;
    }
    if (!rabbit || !rabbit.next) return null;
    turtle = head;
    while (turtle !== rabbit) {
        turtle = turtle.next;
        rabbit = rabbit.next;
    }
    return rabbit;
}



console.log(loopDetection(A));
/*
    Node {
        data: 'C',
        next: Node { data: 'D', next: Node { data: 'E', next: [Circular *1] } }
    }
*/

console.log(loopDetection(four));
/*
    Node {
        data: 9,
        next: Node { data: 10, next: Node { data: 12, next: [Node] } }
    }
*/        

console.log(loopDetection(ll3.head));// null
