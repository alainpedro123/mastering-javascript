// 23

/* Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// temp node
const dummyNode = new Node(0);

/* tail points to the last result node */
this.tail = dummyNode;
while (true) {
  // if either list runs out, use the other list
  if (headA == null) {
    tail.next = headB;
    break;
  }
  if (headB == null) {
    tail.next = headA;
    break;
  }

  /* Compare the data of the two lists whichever lists' data is  
          smaller, append it into tail and advance the head to the next Node 
          */
  if (headA.data <= headB.data) {
    tail.next = headA;
    headA = headA.next;
  }
  else {
    tail.next = headB;
    headB = headB.next;
  }

  /* Advance the tail */
  tail = tail.next;
}
return dummyNode.next; 
}


https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/