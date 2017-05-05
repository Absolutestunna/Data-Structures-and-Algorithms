/*

  Stack are first-in-last-out service

  e.g browsers button highlights most recents visit to a site

  functions provided to a stack -
    push: placing data unto stack
    pop: removing top element of the stack
    peek: displaying top element in stack
    size: determinign elements on the stack

  E.g Prime example of a stack in JavaScript is the Array object has all the options of a stack

*/

//palindrome example

var Stack = function(){

  //attributes of the stack class
  this.count = 0;
  this.storage = {};

  //methods of the stack class

  //push adds a value to the end of the stack
  this.push = function(word){
    this.storage[this.count] = word;

    this.count++;
  }

  this.pop = function(){

    if (this.count <= 0) {
      return undefined
    }


    this.count--;
    var last_item = this.storage[this.count];
    delete this.storage[this.count];
    return last_item;
  }

  this.size = function(){
    return this.count;
  }

  this.peek = function(){
    return this.storage[this.count-1]
  }
}

var stack = new Stack();

stack.push(1);
stack.push(2);


console.log(stack.peek());
stack.pop();
console.log(stack.peek());
stack.push('something');
console.log(stack.peek());
console.log(stack.size());
