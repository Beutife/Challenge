class LNode{
    value: number;
    next: LNode | null;

    constructor(value: number){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
     head: LNode | null;

     constructor(initialValue: number){
        const newNode = new LNode(initialValue);
        this.head = newNode;
     }

     add(value: number){
        const newNode = new LNode(value);

        if(this.head==null){
            this.head = newNode;
        }else{
            let currentNode = this.head
            while(currentNode.next !== null){
                currentNode = currentNode.next
            }
            currentNode = newNode;
        }
     }
 
}


//linked list stores data in nodes, every nodes as a pointer(contain the address to a memory location) to next node
//insertion , time complexity for insertion
//shift operations is majorly for array cps theyre contiguous
//accessing elements in linked list we use a pointer 

//question, what's the pointer like an address?, accessing a data in a linked list

//implemnt the array again without using js(15)
//solve challenges in hackerank the array question
//do doubly link list and circular link list
//build a music play list , use your circular linklist topower your musicplay list and implement shuffle
//should be able to play in reverse order also, shuffle, delete, repeat, add