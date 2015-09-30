'use strict';

// LAB 2: SORTING AND CAMPY SCI-FI

// Welcome to Lab 2 =)

// Be sure to read all the comments!

// All of the instructions are inline with the assignment below.
// Look for the word TODO in comments.  Each TODO will have a
// description of what is required.

// To run this file (in the terminal) use: node lab2.js

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

function Blob() {

}

var blob = new Blob;

(function dowingtonConsumption() {
  var citizensOfDowington = 1000;
  var hourCounter = 0;
  while (citizensOfDowington > 0) {
    hourCounter++;
    citizensOfDowington = citizensOfDowington - hourCounter;
  }
  console.log("dowingtonConsumption complete, hours = " + hourCounter);
  hoursSpentInDowington = hourCounter;
})();

var hoursSpentInDowington; // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function (population, peoplePerHour) {
  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.
  var numberOfCitizens = population;
  var consumptionRate = peoplePerHour;
  var hourCounter = 0;
  while (numberOfCitizens > 0) {
    hourCounter++;
    numberOfCitizens = numberOfCitizens - (hourCounter * consumptionRate);
  }
  console.log("hoursToOoze complete, hours = " + hourCounter);
  return hourCounter;
}

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

assert(blob.hoursToOoze(2000, 5) === 28, 'Population 2000, Consumption Rate 5 should equal 28');
assert(blob.hoursToOoze(5000, 2) === 71, 'Population 5000, Consumption Rate 2 should equal 71');


//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

function SentientBeing () {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.homePlanet = null;
  this.homeLanguage = null;
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function(sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    //TODO: put this on the SentientBeing prototype
    console.log(this.homeLanguageHello);
    return sb.homeLanguageHello;
    //console.log(hello.languageHello);

    //TODO: put this on the SentientBeing prototype
  };

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

function Klingon() {
  this.homeLanguage = 'klingon';
  this.homePlanet = 'Qo\'noS';
  this.homeLanguageHello = hello.klingon;
}
function Romulan() {
  this.homeLanguage = 'romulan';
  this.homePlanet = 'Romulus';
  this.homeLanguageHello = hello.romulan;
}
function Human() {
  this.homeLanguage = 'federation standard';
  this.homePlanet = 'Earth';
  this.homeLanguageHello = hello['federation standard'];
}

Klingon.prototype = new SentientBeing();
Romulan.prototype = new SentientBeing();
Human.prototype = new SentientBeing();

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');


// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');
assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');
assert((new Romulan()).sayHello(new Human()) === 'hello',
  'the human should hear hello');
assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');
assert((new Klingon()).sayHello(new Human()) === 'hello',
  'the human should hear hello');

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************

function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    aLastLetter = a[(a.length - 1)];
    bLastLetter = b[(b.length - 1)];
    return aLastLetter.localeCompare(bLastLetter);
  }
  stringArray.sort(byLastLetter);
}

var colorArray = ["red", "black", "brown", "purple"];
var vegetableArray = ["turnip", "asparagus", "carrot", "cucumber"];

lastLetterSort(colorArray);
lastLetterSort(vegetableArray);

assert(colorArray.join() === 'red,purple,black,brown', 'purple should be in the 2nd spot');
assert(vegetableArray.join() === 'turnip,cucumber,asparagus,carrot', 'cucumber should be in the 2nd spot, and carrot should be 4th');


function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
  numberArray.forEach(function(x){
    sum = sum + x;
  });
  return sum;
}

assert(sumArray([1, 5, 2, 45]) === 53, 'sum should equal 53');
assert(sumArray([5, 54, 124, 555]) === 738, 'sum should equal 738');

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(a, b) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
    return (sumArray(a) - sumArray(b));
  });
}

var numberArraysOne = [[1,66,32,543],[3,1,5],[56,34,23]];
var numberArraysTwo = [[5,434,5533,54],[542,7899,43,2],[5,7,5]];
sumSort(numberArraysOne);
sumSort(numberArraysTwo);


assert(numberArraysOne[0].join() === '3,1,5', 'first array should be [3,1,5]');
assert(numberArraysTwo[0].join() === '5,7,5', 'first array should be [3,1,5]');


//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
