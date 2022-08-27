class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // Insert node
    pushStack(data){
        this.head = new Node(data, this.head);
        this.size++;
    }

    // remove Top 
    popStack(){
        if(!(this.head)) return null;
        if(!(this.head.next)) {
            node = this.head;
            this.head = null;
            this.size--;
            return node;
        }else{
            node = this.head;
            this.head = this.head.next;
            this.size--;
            return node;
        }
    }

    // Clear Stack
    clearStack(){
        this.head = null;
        this.size = 0;
    }

    // Print Stack data
    printStack(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // Insert node
    pushQ(data){
        const node = new Node(data);
        let current;

        // If empty, make head
        if(!this.head){
            this.head = node;
        }else{
            current = this.head;
            while(current.next){ current = current.next; }
            current.next = node;
        }
        this.size++;
    }


    // Remove 
    popQ(){
        if(!(this.head)) return null;
        if(!(this.head.next)) {
            node = this.head;
            this.head = null;
            this.size--;
            return node;
        }else{
            node = this.head;
            this.head = this.head.next;
            this.size--;
            return node;
        }
    }

    // Clear Q
    clearQ(){
        this.head = null;
        this.size = 0;
    }

    // Print Q data
    printQ(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}


module.exports = {
    Stack,
    Queue,
    Node
}
