/*

    Stack Min: How would you design a stack which, in addition to push and pop, has a function min
    which returns the minimum element? Push, pop and min should all operate in 0(1) time.

*/



const lib = require('./StackQ.js');

class Stack{
    constructor(){
        this.head = null;
        this.size = 0;

        // keep track of min
        this.min = Infinity;
    }
    
    pushStack(data){
        this.head = new lib.Node(data, this.head);
        this.size++;
        if(data < this.min) this.min = data;
    }
    
    popStack(){
        if(!(this.head)) return null;
        const node = this.head;
        !(this.head.next) ? this.head = null : this.head = this.head.next;

        // handle min
        if(node.data === this.min){
            this.min = Infinity;
            let current = this.head;
            while(current){
                if(current.data < this.min) this.min = current.data;
                current = current.next;
            }
        }
        this.size--;
        return node;
    }
    
    clearStack(){
        this.head = null;
        this.size = 0;
    }
    
    printStack(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}


const stack = new Stack();
stack.pushStack(100);
stack.pushStack(200);
stack.pushStack(98);
stack.pushStack(99);
stack.pushStack(1);
stack.pushStack(24);
stack.pushStack(25);
stack.pushStack(0);

console.log(stack.min);// 0
stack.popStack();
console.log(stack.min);// 1
stack.popStack();
console.log(stack.min);// 1
stack.popStack();
console.log(stack.min);// 1
stack.popStack();
console.log(stack.min);// 98
stack.pushStack(22);
console.log(stack.min);// 22




