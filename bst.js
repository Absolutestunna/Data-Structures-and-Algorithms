/*
  node = data point in tree;
   - can have children nodes
   - parent nodes can lead to child nodes
   - leaf nodes are nodes at the end of the tree that don't have sub-children

   Binary Search tree
    - can only have 2 branches
    - ordered (left node <= parent node && right node >= parent node);
    - lookup, insertion or deletion takes time proportion to the logrithm of the items stored the tree
    - faster than an looking up items by a key in an unsorted array; slower than the operations of hash table

*/

//Implementation

class Node {
  constructor(data, right=null, left=null){
    this.data = data;
    this.right = right;
    this.left = left;
  }
}

class BST {
  constructor(){
    this.root = null;
  }

  add(data) {
    /*
      1.  check for root, return new node for root
      2.  based on data, check for direction of placement of node
        - if a node exist, recursively check for accompanying child nodes
        - else, create new child node

    */

    let node = this.root;

    //check for root node
    if (node === null){
      this.root = new Node(data);
      return;
    } else {

      const searchTree = function(node){

        if (node.data > data){
          //going left
          if (!node.left){
            node.left = new Node(data);
            return;
          } else {
            return searchTree(node.left);
          }

        } else if (node.data < data){
          //going right
          if (!node.right){
            node.right = new Node(data);
            return;
          } else {
            return searchTree(node.right);
          }
        } else {
          //data already exists in the tree
          return null;
        }

      }
      return searchTree(node);
    }

  }

  remove(data){

    /*

      1. Initialize root
      2. Check for an existing tree
      3. check for node with corresponding data
        - if found,
          - check if node is a leaflet
          - check if node has only a left/right node;
          - check if node has 2 child nodes
            - check data for corresponding right child node and then most left child node
        - else, search the tree recursively
    */



    const removeNode = function(node, data){

      //check for existence of tree
      if (!node) {
        return null;
      }

      if (node.data == data){

        if (node.left == null && node.right == null){
          return null
        }
        if (node.right == null){
          return node.left
        }
        if (node.left == null) {
          return node.right
        }

        var tempNode = node.right;

        //check for left most node with inquired data
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }

        //set node with new data
        node.data = tempNode.data;

        //reconstruct the children right references to nodes
        node.right = removeNode(node.right, tempNode.data);
        return node;

      } else if (node.data < data){
        // going right

        node.right = removeNode(node.right, data);
        return node;


      } else {
        //going left

        node.left = removeNode(node.left, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  } //end of remove

  findMin(){

    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  }

  findMax(){
    let current = this.root;
    while (current.right !== null) {
      current = current.right
    }

    return current.data;
  }

  isPresent(data){

    let node = this.root;

    while (current !== null) {
      if (current.data < data){
        current = current.right;
      } else if (current.data > data){
        current = current.left
      } else if (current.data === data){
        return true;
      }
    }

    return false;
  }

} //end of BST



/*


  isPresent(data){

    //set the current, default, node to the root node
    let current = this.root;

    //"recursively" check if data === current.data; update current node with corresponding child nodes
    while (current !== null) {
      if (data === current.data){
        return true;
      }
      if (data < current.data){
        current = current.left;
      }
      if (data > current.data){
        current = current.right;
      }
    }
    return false;
  }

*/
