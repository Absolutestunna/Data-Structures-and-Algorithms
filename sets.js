/*

  SETS
  - array-like data types;
  - No duplicate items in sets;
  - The values are not in any particular order

  functions: has, values, add, remove, union, difference, intersection, subset

*/

var MySet = function() {

  //collection holds the set values
  var collection = [];
  var index;

  //check for the existence of a value in collection
  this.has = function(value){
    return collection.indexOf(value) !== -1;
  }

  this.values = function(){
    return collection
  }

  this.add = function(element){
    //check if the element exist then add; return false

    if (!this.has(element)){
      collection.push(element)
      return true
    }
    return false;
  }

  this.remove = function(element){

    if (!this.has(element)){
      return false
    }

    index = collection.indexOf(element);
    collection.splice(index, 1);
    return true

  }

  this.size = function(){
    return collection.length;
  }

  this.union = function(otherSet){

    var unionSet = new MySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach(function(e){
      unionSet.add(e);
    })

    secondSet.forEach(function(e){
      unionSet.add(e);
    })

    return unionSet;
  }

  this.intersection = function(otherSet){
    var intersection_set = new MySet();
    var firstSet = this.values();
    firstSet.forEach(function(e){
      if (otherSet.has(e)){
        intersection_set.push(e)
      }
    })

    return intersection_set;

  }

  this.difference = function(otherSet){
    var differenceSet = new MySet();
    var firstSet = this.values();

    firstSet.forEach(function(e){
      if (!otherSet.has(e)){
        differenceSet.push(e);
      }
    })
    return differenceSet;
  }
  //this method will test if test set is a subset of original subset
  this.subset = function(otherSet){
    var firstSet = this.values();
    return firstSet.every(function(e){
      return otherSet.has(e);
    });
  }
}

var setA = new MySet();
var setB = new MySet();


setA.add('a');
setA.add('1');

setB.add('b');
setB.add('2');


console.log(setA.size());
console.log(setB.size());
console.log(setA.subset(setB));
