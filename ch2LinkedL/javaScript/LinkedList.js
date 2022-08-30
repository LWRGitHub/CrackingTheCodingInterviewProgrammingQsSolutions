/*

    Get a better understanding of Linked List with Node.js via YouTube:
    Traversy Media (Jul 3, 2019) 3https://www.youtube.com/watch?v=ZBdE8DElQQU

*/

class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Insert last node
    insertLast(data){
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

    // Insert at index
    insertAt(data, index){
        // If index is out of range
        if(index > 0 && index > this.size) return;

        // If first index
        if(index === 0){
            this.insertFirst(data);
            return;
        }

        // If index anywhere else
        const node = new Node(data);
        let current, previous;
        current = this.head;
        let count = 0;
        while(count < index){
            previous = current; // Node before index
            count++;
            current = current.next; // Node after index
        }
        node.next = current;
        previous.next = node;
        this.size++;
    }

    // Get at index
    getAt(index){
        let current = this.head;
        let count = 0;
        while(current){
            if(count === index) return current.data;
            count++;
            current = current.next;
        }
        return null;
    }

    // Remove at index
    removeAt(index){
        if(index > 0 && index > this.size) return;
        let current = this.head;
        let previous;
        let count = 0;
        if(index === 0){
            this.head = current.next;
        }else{
            while(count < index){
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }

    // Clear list
    clearList(){
        this.head = null;
        this.size = 0;
    }

    // Print list data
    printListData(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}


module.exports = {
    LinkedList,
    Node
}
