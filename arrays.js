/*
  Collection of these exercises can be found at
  https://github.com/wikisoft/collection/blob/master/public/O'Reilly%20-%20Data%20Structures%20And%20Algorithms%20With%20JavaScript.pdf
*/

// 1. Create a grades object that stores a set of student grades in an object. Provide a
// function for adding a grade and a function for displaying the student’s grade average.

var grades = function(){
  this.gradeDataStore = [];
  this.add = add;
  this.average = average;
}

function add(grade){
  this.gradeDataStore.push(grade)
}

function average(){
  var total = this.gradeDataStore.reduce(function(grade1, grade2){
    return grade1 + grade2
  })


  return Number(total / this.gradeDataStore.length).toFixed(2);

}

var teacherGrades = new grades();
teacherGrades.add(45);
teacherGrades.add(55);
teacherGrades.add(65);
teacherGrades.add(75);
teacherGrades.add(85);
teacherGrades.add(95);
teacherGrades.add(15);

// 2.  Store a set of words in an array and display the contents both forward and backward.

var wordsArray = ["Fox", "ate", "my", "homework"];
var forward = wordsArray.join();
var backwards = [];
for (var i = wordsArray.length - 1; i >= 0; i--) {
  backwards.push(wordsArray[i])
}
backwards = backwards.join();
console.log(backwards);

// 3. Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
// data using a two-dimensional array. Create functions to display the monthly average,
// a specific week’s average, and all the weeks’ averages.


function monthTemps(){
  this.monthDataStore = [];
  this.monthAverage = monthAverage;
  this.weekAverage = weekAverage;
  this.addWeek = addWeek;
  this.allWeeksAverage = allWeeksAverage;
}

function addWeek(weekTemp) {
  this.monthDataStore.push(weekTemp);
}

function weekAverage(weekNumber){
  var weekSelectedArray = this.monthDataStore[weekNumber - 1];
  var total = weekSelectedArray.reduce(function(temp1, temp2){
    return temp1 + temp2
  })
  return Number((total / weekSelectedArray.length).toFixed(2));
}

function allWeeksAverage(){
  var weekAverageArray = [];
  for (var i = 0; i < this.monthDataStore.length; i++) {
    var weekNumber = i + 1;
    var eachWeekAverage = this.weekAverage(weekNumber);
    weekAverageArray.push(eachWeekAverage);
  }
  return weekAverageArray
}

function monthAverage(){
  var total = this.allWeeksAverage().reduce(function(avg1, avg2){
    return avg1 + avg2
  })

  return total / this.monthDataStore.length
}

var newMonthTemps = new monthTemps();
newMonthTemps.addWeek([52, 50, 90, 44, 89, 10, 99]);
newMonthTemps.addWeek([54, 20, 60, 54, 90, 100, 79]);
newMonthTemps.addWeek([55, 90, 60, 14, 190, 20, 88]);
newMonthTemps.addWeek([14, 30, 50, 74, 92, 20, 79]);
// newMonthTemps.weekAverage(3);
// newMonthTemps.allWeeksAverage();
newMonthTemps.monthAverage();
