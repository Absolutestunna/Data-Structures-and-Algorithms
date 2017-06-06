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
    if (node == null){
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

  } //end of add

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

      if (!node){
        return null;
      }

      if (node.data == data){

        if (node.right == null && node.left == null){
          return null;
        }
        if (node.right == null){
          return node.left;
        }
        if (node.left == null) {
          return node.right;
        }

        //check for node with 2 children

        var tempNode = node.right;
        while (tempNode.left !== null){
          tempNode = tempNode.left;
        }

        node.data = tempNode.data;

        node.right = removeNode(node.right, tempNode.data);
        return node;

      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        node.left = removeNode(node.left, data);
        return node;
      }
    }

    this.root = removeNode(this.root, data);
  } //end of remove

  inOrder(){

    /*

    Tra­verse the left sub­tree by recur­sively call­ing the traverseTreeInOrder function
    Save the data part of root ele­ment (or cur­rent element)
    Tra­verse the right sub­tree by recur­sively call­ing the in-order function

    */

    if (this.root == null){
      return null;
    } else {
      const result = new Array;

      function traverseTreeInOrder(node){
        node.left && traverseTreeInOrder(node.left);
        result.push(node.data);
        node.right && traverseTreeInOrder(node.right);
      }
      traverseTreeInOrder(this.root);
      return result;
    }
  }

  preOrder(){

    /*
    Save the data part of root ele­ment (or cur­rent element)
    Tra­verse the left sub­tree by recur­sively call­ing the traverseTreePreOrder function.
    Tra­verse the right sub­tree by recur­sively call­ing the traverseTreePreOrder function
    */

    if (this.root == null){
      return null;
    } else {
      const result = new Array();

      function traverseTreePreOrder(node){
        result.push(node.data);
        node.left && traverseTreePreOrder(node.left);
        node.right && traverseTreePreOrder(node.right);

      }

      traverseTreePreOrder(this.root);
      return result;
    }

  }

  postOrder(){

    /*
    Tra­verse the left sub­tree by recur­sively call­ing the traverseTreePreOrder function.
    Tra­verse the right sub­tree by recur­sively call­ing the traverseTreePreOrder function
    Save the data part of root ele­ment (or cur­rent element)
    */

    if (this.root == null){
      return null;
    } else {
      const result = new Array();

      function traversePostOrder(node){
        node.left && traverseTreePreOrder(node.left);
        node.right && traverseTreePreOrder(node.right);
        result.push(node.data);

      }
      traversePostOrder(this.root);
      return result;

    }

  }

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

    let current = this.root;

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

var bst = new BST();
bst.add(3);
bst.add(2);
bst.add(4);
bst.add(1);
bst.add(5);

//traversal functions
bst.inOrder(); //An inorder traversal visits all of the nodes of a BST in ascending order of the node key values.
bst.preOrder(); //A preorder traversal visits the root node first, followed by the nodes in the subtrees
// under the left child of the root node, followed by the nodes in the subtrees under
// the right child of the root node.
bst.postOrder(); //A postorder traversal visits all of the child nodes of the
// left subtree up to the root node, and then visits all of the child nodes of the right subtree
// up to the root node.

//search functions
bst.findMin();
bst.findMax();
bst.isPresent(1);
