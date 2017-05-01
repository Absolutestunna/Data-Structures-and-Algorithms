/*

  First-In-First-Out Service, unlike stack
  used to hold data
  e.g print queue, first to stand in line

  functions around queues - enqueue, dequeue, front, size, isEmpty
*/

var Queue = function(){

  var collection = [];

  this.print = function(){
    console.log('collection', collection);
  }

  this.enqueue = function(value){
    collection.push(value)
  }

  this.dequeue = function(value){
    collection.shift()
  }

  this.front = function(){
    return collection[0];
  }

  this.size = function(){
    return collection.length;
  }

  this.isEmpty = function(){
    return (collection.length === 0)
  }
}

// var q = new Queue();
// q.enqueue('a')
// q.enqueue('b')
// q.enqueue('c')
//
// q.print();
// console.log("what's the front", q.front());
// console.log('size', q.size());
// console.log('empty?', q.isEmpty());
//
// q.dequeue();
// q.print();
// console.log('size', q.size());
// console.log('empty?', q.isEmpty());
// console.log("what's the front", q.front());

//Priority Queue

var PriorityQueue = function(){

  var collection = [];

  this.isEmpty = function() {
     return (collection.length === 0);
   };

   this.enqueue = function(elementArr){

     // check if it's empty, true = add element to Queue,
     // iterate thru collection and populate collection based on priority
     // if the priority number exists and just add the duplicate number and it's item to the collection

     if (collection.length === 0){
       collection.push(elementArr);
     } else {
       var added = false;
       for (var i=0; i<collection.length; i++){
         if (elementArr[1] < collection[i][1]){
           collection.splice(i, 0, elementArr);
           added = true;
           break
         }
       }
       if (!added){
         collection.push(elementArr);
       }
     }
   }

   this.dequeue = function(){
     var priority_name = collection.shift()
     return priority_name[0];
   }

   this.front = function(){
     return collection[0]
   }

   this.size = function(){
     return collection.length;
   }

   this.isEmpty = function(){
     return collection.length === 0
   }

   this.print = function(){
     console.log('collection', collection);
   }
}

var pq = new PriorityQueue();

pq.enqueue(['Beau Carnes', 2]);
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wójcik', 1])
pq.enqueue(['Briana Swift', 2])
