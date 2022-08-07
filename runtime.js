const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


// Question 1// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// Starting array
let addToZero = [5,7,-6, 30, 3, 2, 6]

// Write your solution below:
let value = false;
for (let i = 0; i < addToZero.length; i++) {
  for (let j = 0; j < addToZero.length; j++) {
    if (i !== j) {
      if (addToZero[i] + addToZero[j] === 0) {
        value = true;
      } 
    }
  }
}
// space complexity= 0(1)
// time complexity = 0(n^2)

// console.log(value)

// Question 2// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.
  
function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }
// space complexity=0(1)
//   time complexity =0(1)
//   console.log(hasUniqueChars("aisha"))

//  Question 3 A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;

  }

// space complexity=0(1)
//   time complexity =0(n)
//  console.log(isPangram("The five boxing wizards jump quickly"))

// Question 4 Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.
// function findLongestWord(str) {
//     return str.length;
//   }
// //   console.log(findLongestWord("hi", "hello"))

function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
// space complexity=0(n)
//   time complexity =0(n)
//   console.log(findLongestWord("bike ","bye"))