/*

    - key-value pairs
    - object class operates like a dictionary

*/

function Dictionary(){
  this.dataStore = {};
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
}

function add(key, value){
  this.dataStore[key] = value;
}

function find(key){
  return this.dataStore[key];
}

function remove(key){
  delete this.dataStore[key];
}
//
// function showAll(){
//   forEach(var key in Object.keys(dataStore)){
//     console.log('key', this.dataStore[key])
//   }
// }

var pbook = new Dictionary();
pbook.add("Mike","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("David's extension: ", pbook.find("David"));
pbook.remove("David");
// pbook.showAll();

/*
  Using the Dictionary class, write a program that stores the number of occurrences
  of words in a text. Your program should display each word in a text just once as
  well as the number of times the word occurs in the text. For example, given the text
  “the brown fox jumped over the blue fox,” the output will be:


  rewrite this exercise so that it displays the words in sorted order.
*/


function howManyTimes(str){
  var splitStringArray = str.split(' ');
  var occurenceObj = {};

  for (var i=0; i<splitStringArray.length; i++){
    var objKeys = Object.keys(occurenceObj);
    var selectedWord = splitStringArray[i];
    if (objKeys.indexOf(selectedWord) === -1){
        occurenceObj[splitStringArray[i]] = 1;
    } else {
        occurenceObj[splitStringArray[i]] += 1;
    }
  }

  return occurenceObj;

}

howManyTimes('the brown fox jumped over the blue fox');
